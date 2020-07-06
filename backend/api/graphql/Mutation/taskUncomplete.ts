import { schema } from 'nexus';
import { idArg } from 'nexus/components/schema';
import { decodeIdType } from '../../utils/idTypes';

schema.extendType({
  type: 'Mutation',
  definition: t => {
    t.field('taskUncomplete', {
      type: 'Task',
      args: {
        id: idArg({ required: true })
      },
      resolve: (_, args, { db }) => {
        const { id } = decodeIdType(args.id)
        return db.task.update({
          where: { id },
          data: { complete: false },
        })
      }
    })
  }
})