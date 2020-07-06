/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type TodoListItemCompleteMutationVariables = {
    id: string;
};
export type TodoListItemCompleteMutationResponse = {
    readonly taskComplete: {
        readonly id: string;
        readonly complete: boolean;
    } | null;
};
export type TodoListItemCompleteMutation = {
    readonly response: TodoListItemCompleteMutationResponse;
    readonly variables: TodoListItemCompleteMutationVariables;
};



/*
mutation TodoListItemCompleteMutation(
  $id: ID!
) {
  taskComplete(id: $id) {
    id
    complete
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
      }
    ],
    "concreteType": "Task",
    "kind": "LinkedField",
    "name": "taskComplete",
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
        "name": "complete",
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
    "name": "TodoListItemCompleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListItemCompleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "TodoListItemCompleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListItemCompleteMutation(\n  $id: ID!\n) {\n  taskComplete(id: $id) {\n    id\n    complete\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b37892c1d79ff83302b78d18f18291a8';
export default node;
