import { schema } from 'nexus'
import { idArg } from 'nexus/components/schema'
import { decodeIdType } from '../../utils/idTypes'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('node', {
      type: 'Node',
      args: { id: idArg({ required: true }) },
      resolve: async (root, args, { db }, info) => {
        const { id, __typename, prismaObjectName } = decodeIdType(args.id)
        // @ts-ignore
        const node = await db[prismaObjectName].findOne({ where: { id } })
        return {
          ...node,
          id: args.id,
          __typename,
        }
      }
    })
  }
})