import { server } from 'nexus'
import * as cors from 'cors'
server.express.use(cors())

import { use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
use(prisma({
  features: { crud: true },
}))