
import { LoadingStore } from '@quarkunlimit/qu-mobx';
import { TodoStore } from './TodoStore';


export type TLoadingStore = LoadingStore<'loading'>;

/** 根Store接口 */
export interface IRootStore {
loadingStore: TLoadingStore;
todoStore: TodoStore;

}