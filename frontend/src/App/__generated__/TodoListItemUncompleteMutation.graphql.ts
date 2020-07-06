/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type TodoListItemUncompleteMutationVariables = {
    id: string;
};
export type TodoListItemUncompleteMutationResponse = {
    readonly taskUncomplete: {
        readonly id: string;
        readonly complete: boolean;
    } | null;
};
export type TodoListItemUncompleteMutation = {
    readonly response: TodoListItemUncompleteMutationResponse;
    readonly variables: TodoListItemUncompleteMutationVariables;
};



/*
mutation TodoListItemUncompleteMutation(
  $id: ID!
) {
  taskUncomplete(id: $id) {
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
    "name": "taskUncomplete",
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
    "name": "TodoListItemUncompleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListItemUncompleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "TodoListItemUncompleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListItemUncompleteMutation(\n  $id: ID!\n) {\n  taskUncomplete(id: $id) {\n    id\n    complete\n  }\n}\n"
  }
};
})();
(node as any).hash = '84a5d8edd1aaf5a054e86951430264cc';
export default node;
