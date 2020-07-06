import { schema } from 'nexus';
import { idArg, arg } from 'nexus/components/schema';
import { decodeIdType } from '../../utils/idTypes';

schema.extendType({
  type: 'Mutation',
  definition: t => {
    t.field('taskDelete', {
      type: 'Task',
      args: {
        id: idArg({ required: true })
      },
      resolve: (_, args, { db }) => {
        const { id } = decodeIdType(args.id)
        console.log(id)
        return db.task.delete({ where: { id } })
      }
    })
  }
})