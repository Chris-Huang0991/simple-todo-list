import { schema } from 'nexus'
import { decodeIdType, toIdType } from '../utils/idTypes'

schema.interfaceType({
  name: 'Node',
  definition: t => {
    t.resolveType(node => {
      const decoded = decodeIdType(node.id)
      return decoded.__typename as any
    })
    t.id('id', {
      description: 'Relay ID',
      nullable: false,
      resolve: ({ id }, __, ___, { parentType }) => {
        return toIdType(id, parentType.name)
      }
    })
  }
})