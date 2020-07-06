import { schema } from 'nexus';
import { arg } from 'nexus/components/schema';
import { offsetToCursor } from 'graphql-relay';

schema.inputObjectType({
  name: 'TaskCreateInput',
  definition: t => {
    t.string('content', { required: true })
  }
})
schema.objectType({
  name: 'TaskCreatePayload',
  definition: t => {
    t.string('cursor')
    t.field('node', { type: 'Task' })
  }
})

schema.extendType({
  type: 'Mutation',
  definition: t => {
    t.field('taskCreate', {
      type: 'TaskCreatePayload',
      args: {
        input: arg({
          type: 'TaskCreateInput',
          required: true
        })
      },
      resolve: async (_, { input }, { db }) => {
        const task = await db.task.create({
          data: { content: input.content }
        })

        const offset = await db.task.count()
        const cursor = offsetToCursor(offset)

        return {
          cursor,
          node: task
        }
      }
    })
  }
})