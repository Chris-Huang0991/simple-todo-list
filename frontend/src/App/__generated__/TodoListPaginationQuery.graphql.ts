/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TaskConnectionStatus = "ACTIVE" | "ALL" | "COMPLETE" | "%future added value";
export type TodoListPaginationQueryVariables = {
    cursor?: string | null;
    count?: number | null;
    status?: TaskConnectionStatus | null;
};
export type TodoListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TodoList_data">;
};
export type TodoListPaginationQuery = {
    readonly response: TodoListPaginationQueryResponse;
    readonly variables: TodoListPaginationQueryVariables;
};



/*
query TodoListPaginationQuery(
  $cursor: String
  $count: Int = 10
  $status: TaskConnectionStatus = ALL
) {
  ...TodoList_data_4qXjrI
}

fragment TodoListItem_item on Task {
  id
  content
  complete
}

fragment TodoList_data_4qXjrI on Query {
  taskConnection(first: $count, after: $cursor, where: {status: $status}) {
    totalCount
    edges {
      cursor
      node {
        ...TodoListItem_item
        id
        __typename
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String"
  },
  {
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int"
  },
  {
    "defaultValue": "ALL",
    "kind": "LocalArgument",
    "name": "status",
    "type": "TaskConnectionStatus"
  }
],
v1 = {
  "kind": "Variable",
  "name": "status",
  "variableName": "status"
},
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  {
    "fields": [
      (v1/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListPaginationQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          },
          (v1/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "TodoList_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "QueryTaskConnection_Connection",
        "kind": "LinkedField",
        "name": "taskConnection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "TaskEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v2/*: any*/),
        "filters": [
          "where"
        ],
        "handle": "connection",
        "key": "TodoList_taskConnection",
        "kind": "LinkedHandle",
        "name": "taskConnection"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {
      "derivedFrom": "TodoList_data",
      "isRefetchableQuery": true
    },
    "name": "TodoListPaginationQuery",
    "operationKind": "query",
    "text": "query TodoListPaginationQuery(\n  $cursor: String\n  $count: Int = 10\n  $status: TaskConnectionStatus = ALL\n) {\n  ...TodoList_data_4qXjrI\n}\n\nfragment TodoListItem_item on Task {\n  id\n  content\n  complete\n}\n\nfragment TodoList_data_4qXjrI on Query {\n  taskConnection(first: $count, after: $cursor, where: {status: $status}) {\n    totalCount\n    edges {\n      cursor\n      node {\n        ...TodoListItem_item\n        id\n        __typename\n      }\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b5aa06bc27a116cf36d0274d3f3ff2f6';
export default node;
