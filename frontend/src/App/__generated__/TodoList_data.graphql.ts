/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoList_data = {
    readonly taskConnection: {
        readonly totalCount: number | null;
        readonly edges: ReadonlyArray<{
            readonly cursor: string;
            readonly node: {
                readonly " $fragmentRefs": FragmentRefs<"TodoListItem_item">;
            } | null;
        } | null> | null;
    } | null;
    readonly " $refType": "TodoList_data";
};
export type TodoList_data$data = TodoList_data;
export type TodoList_data$key = {
    readonly " $data"?: TodoList_data$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoList_data">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "taskConnection"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./TodoListPaginationQuery.graphql.ts')
    }
  },
  "name": "TodoList_data",
  "selections": [
    {
      "alias": "taskConnection",
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "status",
              "variableName": "status"
            }
          ],
          "kind": "ObjectValue",
          "name": "where"
        }
      ],
      "concreteType": "QueryTaskConnection_Connection",
      "kind": "LinkedField",
      "name": "__TodoList_taskConnection_connection",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "TodoListItem_item"
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
    }
  ],
  "type": "Query"
};
})();
(node as any).hash = 'b5aa06bc27a116cf36d0274d3f3ff2f6';
export default node;
