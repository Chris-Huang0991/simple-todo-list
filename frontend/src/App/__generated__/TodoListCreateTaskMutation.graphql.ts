/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type TodoListCreateTaskMutationVariables = {
    content: string;
};
export type TodoListCreateTaskMutationResponse = {
    readonly taskCreate: {
        readonly cursor: string | null;
        readonly node: {
            readonly id: string;
            readonly content: string;
            readonly complete: boolean;
        } | null;
    } | null;
};
export type TodoListCreateTaskMutation = {
    readonly response: TodoListCreateTaskMutationResponse;
    readonly variables: TodoListCreateTaskMutationVariables;
};



/*
mutation TodoListCreateTaskMutation(
  $content: String!
) {
  taskCreate(input: {content: $content}) {
    cursor
    node {
      id
      content
      complete
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "content",
    "type": "String!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "content",
            "variableName": "content"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "TaskCreatePayload",
    "kind": "LinkedField",
    "name": "taskCreate",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "node",
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "complete",
            "storageKey": null
          }
        ],
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
    "name": "TodoListCreateTaskMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListCreateTaskMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "TodoListCreateTaskMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListCreateTaskMutation(\n  $content: String!\n) {\n  taskCreate(input: {content: $content}) {\n    cursor\n    node {\n      id\n      content\n      complete\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ee067fe3f381835afdbed1cc44bb87fa';
export default node;
