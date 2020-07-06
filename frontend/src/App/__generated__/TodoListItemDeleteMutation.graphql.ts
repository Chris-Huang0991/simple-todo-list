/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type TodoListItemDeleteMutationVariables = {
    id: string;
};
export type TodoListItemDeleteMutationResponse = {
    readonly taskDelete: {
        readonly id: string;
    } | null;
};
export type TodoListItemDeleteMutation = {
    readonly response: TodoListItemDeleteMutationResponse;
    readonly variables: TodoListItemDeleteMutationVariables;
};



/*
mutation TodoListItemDeleteMutation(
  $id: ID!
) {
  taskDelete(id: $id) {
    id
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
    "name": "taskDelete",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "TodoListItemDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListItemDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "TodoListItemDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListItemDeleteMutation(\n  $id: ID!\n) {\n  taskDelete(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fc9e0fbc8e6f99c1c398f0cf04b69804';
export default node;
