
import {
	createContainer,
	useLocalObservable,
	LoadingStore,
  PropsStore
} from '@quarkunlimit/qu-mobx';
import { TLoadingStore, IRootStore } from './interface';
import { TodoStore } from './TodoStore';
interface IProps {
  testMsg: string
}

export class RootStore implements IRootStore {
  loadingStore:TLoadingStore;
  todoStore: TodoStore;
  propsStore: PropsStore<IProps>;

  constructor() {
    this.loadingStore = new LoadingStore();
		this.todoStore = new TodoStore(this);
    this.propsStore = new PropsStore();
  }
}

export const { Provider, useStore } = createContainer(() =>
  useLocalObservable(() => new RootStore())
);
  