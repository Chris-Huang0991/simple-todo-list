import { atom } from "recoil";

export type FilterStateType = 'Show All' | 'Show Completed' | 'Show Uncompleted'
export const todoListFilterState = atom<FilterStateType>({
  key: 'todoListFilterState',
  default: 'Show All',
})