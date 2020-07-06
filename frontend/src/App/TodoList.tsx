import React from 'react'

import { useForm } from 'react-hook-form'
import { Typography, List, Paper, ListItem, TextField, ListItemIcon, InputAdornment, IconButton } from '@material-ui/core'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import SendIcon from '@material-ui/icons/Send'

import TodoListItem from './TodoListItem'

import { graphql } from 'babel-plugin-relay/macro'
import { usePaginationFragment, useMutation } from 'react-relay/hooks'

import { TodoListPaginationQuery, TaskConnectionStatus } from './__generated__/TodoListPaginationQuery.graphql'
import { TodoList_data$key } from './__generated__/TodoList_data.graphql'
import { TodoListCreateTaskMutation } from './__generated__/TodoListCreateTaskMutation.graphql'
import { ConnectionHandler } from 'relay-runtime'

type CreateFormInputs = {
  content: string
}
type TodoListProps = {
  data: TodoList_data$key
}
const TodoList: React.FC<TodoListProps> = props => {
  const { data, refetch } = usePaginationFragment<TodoListPaginationQuery, TodoList_data$key>(
    graphql`
      fragment TodoList_data on Query
      @argumentDefinitions(
        cursor: { type: "String" }
        count: { type: "Int", defaultValue: 10 }
        status: { type: "TaskConnectionStatus", defaultValue: ALL }
      )
      @refetchable(queryName: "TodoListPaginationQuery")
      {
        taskConnection(
          first: $count
          after: $cursor
          where: {
            status: $status
          }
        )
        @connection(key: "TodoList_taskConnection", filters: [status])
        {
          totalCount
          edges {
            cursor
            node {
              ...TodoListItem_item
            }
          }
        }
      }
    `,
    props.data
  )

  const [createTask] = useMutation<TodoListCreateTaskMutation>(graphql`
    mutation TodoListCreateTaskMutation($content: String!) {
      taskCreate(input: { content: $content }) {
        cursor
        node {
          id
          content
          complete
        }
      }
    }
  `)
  const { register, handleSubmit, reset } = useForm<CreateFormInputs>()
  const onSubmit = (data: CreateFormInputs) => {
    if (!data.content) return
    createTask({
      variables: { content: data.content },
      updater: store => {
        const newEdge = store.getRootField('taskCreate')

        const root = store.getRoot()
        const conn = ConnectionHandler.getConnection(root, 'TodoList_taskConnection')

        if (!conn || !newEdge) return

        const oldCount = conn.getValue('totalCount') as number
        conn.setValue(oldCount + 1, 'totalCount')

        ConnectionHandler.insertEdgeAfter(conn, newEdge)
      },
      onCompleted: () => {
        reset({ content: '' })
      }
    })
  }



  const statuses: TaskConnectionStatus[] = ['ALL', 'ACTIVE', 'COMPLETE']
  const [status, setStatus] = React.useState<TaskConnectionStatus>('ALL')
  const handleStatusChange = (_: any, newStatus: TaskConnectionStatus) => setStatus(newStatus)
  React.useEffect(() => {
    refetch({ status })
  }, [status, refetch])

  const totalCount = data.taskConnection?.totalCount ?? 0

  return (
    <>
      <Typography variant='h3' gutterBottom style={{ textAlign: 'center' }}>
        Todo list
      </Typography>
      <Paper>
        <List>
          <ListItem>
            <ListItemIcon />
            <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
              <TextField
                name='content'
                inputRef={register}

                autoFocus

                placeholder='What needs to be done?'
                variant='outlined'
                fullWidth

                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton type='submit'>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </form>
          </ListItem>
          {data.taskConnection?.edges?.map(item => {
            if (!item || !item?.node) return null

            return <TodoListItem key={item.cursor} item={item.node} />
          })}
          <ListItem style={{ display: 'flex' }}>
            <span>
              {totalCount} {totalCount > 1 ? 'items' : 'item'} left
            </span>
            <div style={{ flexGrow: 1 }} />
            <ToggleButtonGroup
              value={status}
              exclusive
              onChange={handleStatusChange}
            >
              {statuses.map(status => (
                <ToggleButton key={status} value={status} aria-label={status} style={{ textTransform: 'lowercase' }}>
                  {status}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </ListItem>
        </List>
      </Paper>
      <Typography variant='caption'>
        Double-click to edit a todo
      </Typography>
    </>
  )
}
export default TodoList