import { Environment, RecordSource, Store } from 'relay-runtime'
import { RelayNetworkLayer, urlMiddleware } from 'react-relay-network-modern'

import { API_ENDPOINT } from 'configs'

const network = new RelayNetworkLayer(
  [
    urlMiddleware({
      url: () => Promise.resolve(API_ENDPOINT),
    })
  ]
)

export default new Environment({
  network,
  store: new Store(new RecordSource()),
})
