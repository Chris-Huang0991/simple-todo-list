import { schema } from 'nexus'
import { idArg, arg } from 'nexus/components/schema'
import { decodeIdType } from '../../utils/idTypes'

schema.inputObjectType({
  name: 'TaskUpdateInput',
  definition: t => {
    t.string('content')
  }
})

schema.extendType({
  type: 'Mutation',
  definition: t => {
    t.field('taskUpdate', {
      type: 'Task',
      args: {
        id: idArg({ required: true }),
        input: arg({ type: 'TaskUpdateInput', required: true })
      },
      resolve: (_, { id: idType, input }, { db }) => {
        const { id } = decodeIdType(idType)

        return db.task.update({
          where: { id },
          data: {
            content: input.content || undefined
          },
        })
      }
    })
  }
})