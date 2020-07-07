import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'

import { ErrorBoundary } from 'react-error-boundary'
import ErrorBoundaryWithRetry from 'component/ErrorBoundaryWithRetry'

import { RelayEnvironmentProvider } from 'react-relay/hooks'
import relayEnvironment from 'providers/relayEnvironment'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from 'providers/theme'

const AppQuery = require('./App/__generated__/AppQuery.graphql')
const root = document.getElementById('root') as HTMLElement

ReactDOM.unstable_createRoot(root).render(
  <ErrorBoundary FallbackComponent={ErrorBoundaryWithRetry}>
    <RelayEnvironmentProvider environment={relayEnvironment as any}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Suspense fallback='App loading...'>
          <App preloadData={AppQuery} />
        </React.Suspense>
      </ThemeProvider>
    </RelayEnvironmentProvider>
  </ErrorBoundary>
)

serviceWorker.unregister()
