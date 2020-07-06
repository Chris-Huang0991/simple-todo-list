import { schema } from 'nexus'
import { idArg } from 'nexus/components/schema'
import { decodeIdType } from '../../utils/idTypes'

schema.extendType({
  type: 'Query',
  definition(t) {
    t.field('nodes', {
      type: 'Node',
      list: true,
      nullable: false,
      args: {
        ids: idArg({
          list: true,
          nullable: false,
        })
      },
      resolve: (_, { ids }, { db }) => {
        return ids.map(async idType => {
          const { id, __typename, prismaObjectName } = decodeIdType(idType)
          // @ts-ignore
          const node = await db[prismaObjectName].findOne({ where: { id } })
          return {
            ...node,
            id: idType,
            __typename,
          }
        })
      }
    })
  }
})