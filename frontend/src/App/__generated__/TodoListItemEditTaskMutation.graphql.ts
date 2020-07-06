/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type TaskUpdateInput = {
    content?: string | null;
};
export type TodoListItemEditTaskMutationVariables = {
    id: string;
    input: TaskUpdateInput;
};
export type TodoListItemEditTaskMutationResponse = {
    readonly taskUpdate: {
        readonly id: string;
        readonly content: string;
    } | null;
};
export type TodoListItemEditTaskMutation = {
    readonly response: TodoListItemEditTaskMutationResponse;
    readonly variables: TodoListItemEditTaskMutationVariables;
};



/*
mutation TodoListItemEditTaskMutation(
  $id: ID!
  $input: TaskUpdateInput!
) {
  taskUpdate(id: $id, input: $input) {
    id
    content
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "TaskUpdateInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "taskUpdate",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListItemEditTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListItemEditTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "TodoListItemEditTaskMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListItemEditTaskMutation(\n  $id: ID!\n  $input: TaskUpdateInput!\n) {\n  taskUpdate(id: $id, input: $input) {\n    id\n    content\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e7457d69aceea90e76f08e20b9a8526d';
export default node;
