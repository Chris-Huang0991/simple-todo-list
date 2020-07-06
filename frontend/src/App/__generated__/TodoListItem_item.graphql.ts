/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoListItem_item = {
    readonly id: string;
    readonly content: string;
    readonly complete: boolean;
    readonly " $refType": "TodoListItem_item";
};
export type TodoListItem_item$data = TodoListItem_item;
export type TodoListItem_item$key = {
    readonly " $data"?: TodoListItem_item$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoListItem_item">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListItem_item",
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
  "type": "Task"
};
(node as any).hash = 'b59a092a81239645b60ce664a9583e0d';
export default node;
