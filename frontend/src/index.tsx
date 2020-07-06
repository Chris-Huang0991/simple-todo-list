import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'

import { RelayEnvironmentProvider } from 'react-relay/hooks'
import relayEnvironment from 'providers/relayEnvironment'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from 'providers/theme'

const AppQuery = require('./App/__generated__/AppQuery.graphql')
const root = document.getElementById('root') as HTMLElement
ReactDOM.unstable_createRoot(root).render(
  <RelayEnvironmentProvider environment={relayEnvironment as any}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Suspense fallback='App loading...'>
        <App preloadData={AppQuery} />
      </React.Suspense>
    </ThemeProvider>
  </RelayEnvironmentProvider>
)

serviceWorker.unregister();
