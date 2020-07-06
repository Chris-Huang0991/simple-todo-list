import React from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import * as serviceWorker from 'serviceWorker'

import { RecoilRoot } from 'recoil'

const root = document.getElementById('root') as HTMLElement
ReactDOM.unstable_createRoot(root).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
)

serviceWorker.unregister()
