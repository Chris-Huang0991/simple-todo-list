import { schema } from 'nexus'

schema.objectType({
  name: "Task",
  definition(t) {
    t.implements('Node')
    t.model.content()
    t.model.complete()
  }
})