import { makeAutoObservable } from "@quarkunlimit/qu-mobx";
import { IComputed } from "./interface";
import { RootStore } from "../";
import { VISIBILITY_TYPE } from "../../../constains";

export class Computed implements IComputed {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  // 获取todos数据
  get todos() {
    const { allIds, byIds, activeType } = this.rootStore.todoStore.logic;
    const todos = allIds.map((id) => ({
      ...byIds[id],
      id,
    }));

    switch (activeType) {
      case VISIBILITY_TYPE.COMPLETED:
        return todos.filter((item) => item.completed);
      case VISIBILITY_TYPE.INCOMPLETED:
        return todos.filter((item) => !item.completed);
      default:
        return todos;
    }
  }

  // 获取异步请求状态
  get loading() {
    console.log(`状态${this.rootStore.loadingStore.get('loading')}`)
    return this.rootStore.loadingStore.get('loading')
  }
}
