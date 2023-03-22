
import { LoadingStore } from '@quarkunlimit/qu-mobx';
import { RootStore } from '../';
import { Logic } from "./Logic"
import { Computed } from "./Computed"
import { TLoadingStore } from "../interface"


export interface ITodoItem {
  content: string
  completed: boolean
  id?: number
}


/** 逻辑接口 */
export interface ILogic {
  loadingStore: TLoadingStore;
  rootStore: RootStore;
  newId: number
  allIds: number[]
  byIds: {
    [key: number]: ITodoItem
  }

  featchData: string

  addTodo: (content: string) => void

  toggleTodo: (id: number) => void

  filterTodos: (type: string) => void
}  
  
/** 计算属性接口 */
export interface IComputed {
  rootStore: RootStore;
  todos: ITodoItem[]
}

/** 根Store接口 */
export interface ITodoStore {
  logic: Logic;
  computed: Computed;
}
  