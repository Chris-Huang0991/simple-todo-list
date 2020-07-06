import React from 'react'

import { useForm } from "react-hook-form"
import { ListItem, ListItemText, makeStyles, ListItemSecondaryAction, IconButton, Divider, ListItemIcon, TextField, InputAdornment } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import SendIcon from '@material-ui/icons/Send'

import { graphql } from 'babel-plugin-relay/macro'
import { useFragment, useMutation } from 'react-relay/hooks'
import { TodoListItem_item$key } from './__generated__/TodoListItem_item.graphql'
import { TodoListItemDeleteMutation } from './__generated__/TodoListItemDeleteMutation.graphql'
import { TodoListItemUncompleteMutation } from './__generated__/TodoListItemUncompleteMutation.graphql'
import { TodoListItemCompleteMutation } from './__generated__/TodoListItemCompleteMutation.graphql'
import { TodoListItemEditTaskMutation } from './__generated__/TodoListItemEditTaskMutation.graphql'
import { ConnectionHandler } from 'relay-runtime'

type EditFormInputs = {
  content: string
}

type TodoListItemProps = {
  item: TodoListItem_item$key
}
const TodoListItem: React.FC<TodoListItemProps> = props => {
  const classes = useStyles()

  const item = useFragment(
    graphql`
      fragment TodoListItem_item on Task {
        id
        content
        complete
      }
    `,
    props.item
  )

  const [editTask] = useMutation<TodoListItemEditTaskMutation>(graphql`
    mutation TodoListItemEditTaskMutation($id: ID!, $input: TaskUpdateInput!) {
      taskUpdate(id: $id, input: $input) {
        id
        content
      }
    }
  `)
  const [isEdit, setIsEdit] = React.useState(false)
  const toggleEditItem = () => setIsEdit(pre => !pre)
  const { register, handleSubmit } = useForm<EditFormInputs>()
  const onSubmit = (data: EditFormInputs) => {
    setIsEdit(false)
    editTask({
      variables: {
        id: item.id,
        input: {
          content: data.content
        }
      }
    })
  }

  const [uncompleteTask] = useMutation<TodoListItemUncompleteMutation>(graphql`
    mutation TodoListItemUncompleteMutation($id: ID!) {
      taskUncomplete(id: $id) {
        id
        complete
      }
    }
  `)
  const uncompleteTaskHandle = () => {
    uncompleteTask({
      variables: { id: item.id }
    })
  }

  const [completeTask] = useMutation<TodoListItemCompleteMutation>(graphql`
    mutation TodoListItemCompleteMutation($id: ID!) {
      taskComplete(id: $id) {
        id
        complete
      }
    }
  `)
  const completeTaskHandle = () => {
    completeTask({
      variables: { id: item.id }
    })
  }

  const [deleteTask] = useMutation<TodoListItemDeleteMutation>(graphql`
    mutation TodoListItemDeleteMutation($id: ID!) {
      taskDelete(id: $id) {
        id
      }
    }
  `)
  const deleteTaskHandle = () => {
    deleteTask({
      variables: {
        id: item.id
      },
      updater: store => {
        const root = store.getRoot()
        const conn = ConnectionHandler.getConnection(root, 'TodoList_taskConnection')
        if (!conn) return

        const oldCount = conn.getValue('totalCount') as number
        conn.setValue(oldCount - 1, 'totalCount')
      },
      configs: [
        {
          type: 'NODE_DELETE',
          deletedIDFieldName: 'id',
        }
      ]
    })
  }

  return (
    <>
      <ListItem button disableRipple={isEdit} onDoubleClick={toggleEditItem}>
        <ListItemIcon>
          {item.complete
            ? (
              <IconButton edge='start' onClick={uncompleteTaskHandle}>
                <CheckCircleOutlineIcon />
              </IconButton>
            )
            : (
              <IconButton edge='start' onClick={completeTaskHandle}>
                <RadioButtonUncheckedIcon />
              </IconButton>
            )
          }
        </ListItemIcon>
        {isEdit
          ? (
            <form onSubmit={handleSubmit(onSubmit)} className={classes.editForm}>
              <TextField
                name='content'
                inputRef={register}

                defaultValue={item.content}

                autoFocus
                variant='outlined'
                className={classes.editTextField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton type='submit'>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}

                onClick={e => e.stopPropagation()}
                onDoubleClick={e => e.stopPropagation()}
              />
            </form>
          )
          : (
            <ListItemText
              primary = {item.content}
              classes={{
               primary: item.complete ? classes.completeItemText : classes.itemText
              }}
            />
          )
        }
        <ListItemSecondaryAction>
          <IconButton edge='end' onClick={deleteTaskHandle}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  )
}
export default TodoListItem
const useStyles = makeStyles(theme => ({
  itemText: {},
  completeItemText: {
    color: theme.palette.grey[400],
    textDecoration: 'line-through',
  },
  editForm: {
    width: '100%',
  },
  editTextField: {
    width: '100%',
  },
}))
