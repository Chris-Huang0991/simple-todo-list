import { schema } from 'nexus'
import { connectionFromArray } from 'graphql-relay'

schema.enumType({
  name: 'TaskConnectionStatus',
  members: ['ALL', 'ACTIVE', 'COMPLETE']
})
schema.inputObjectType({
  name: 'TaskConnectWhereInput',
  definition: t => {
    t.field('status', { type: 'TaskConnectionStatus' })
  }
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.connection('taskConnection', {
      type: 'Task',
      additionalArgs: {
        where: 'TaskConnectWhereInput'
      },
      // TODO wait for fixs from nexus
      // @ts-ignore
      resolve: async (_, { where, ...args }, { db }) => {
        const complete =
          where?.status === 'ACTIVE' ? false :
          where?.status === 'COMPLETE' ? true :
          undefined

        return connectionFromArray(
          await db.task.findMany({
            where: { complete }
          }),
          args
        )
      },
      extendConnection: t => {
        t.int('totalCount', {
          resolve: (root, args, { db }) => {
            return db.task.count()
          }
        })
      }
    })
  }
})