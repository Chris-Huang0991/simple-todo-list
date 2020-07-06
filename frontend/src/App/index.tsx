import React from 'react'
import { Container } from '@material-ui/core'
import { usePreloadedQuery } from 'react-relay/hooks'
import { graphql } from 'babel-plugin-relay/macro'
import TodoList from './TodoList'
import { AppQuery } from './__generated__/AppQuery.graphql'

type AppProps = {
  preloadData: any
}

const App: React.FC<AppProps> = ({ preloadData }) => {
  const data = usePreloadedQuery<AppQuery>(
    graphql`
      query AppQuery {
        ...TodoList_data
      }
    `,
    preloadData
  )

  return (
    <Container maxWidth='sm'>
      <TodoList data={data} />
    </Container>
  )
}

export default App
