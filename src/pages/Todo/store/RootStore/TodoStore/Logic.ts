
import { makeAutoObservable, runInAction, withRequest } from '@quarkunlimit/qu-mobx';
import { ILogic, ITodoItem } from './interface';
import { TLoadingStore } from '../interface';

import { RootStore } from '../';
import { VISIBILITY_TYPE } from '../../../constains'
export class Logic implements ILogic {
    loadingStore: TLoadingStore;
    rootStore: RootStore;
    newId: number = 0;
    activeType: string = VISIBILITY_TYPE.ALL;
    allIds: number[] = [];
    byIds: {
        [key: number]: ITodoItem
    } = []
    featchData: string = ''

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.loadingStore = rootStore.loadingStore;
        // this.newId = 0;
        // this.activeType = VISIBILITY_TYPE.ALL;
        // this.allIds = [];
        // this.byIds = {};
        this.onTest = withRequest(this.onTest, 'loading')

        makeAutoObservable(this, {}, { autoBind: true });
    }

    // 添加Todo
    addTodo(content: string) {
        this.allIds = [
            ...this.allIds,
            this.newId
        ]
        this.byIds[this.newId] = {
            content,
            completed: false
        }
        this.newId += 1
    }

    // Todo状态切换
    toggleTodo(id: number) {
        this.byIds[id].completed = !this.byIds[id].completed
    }

    // 根据状态筛选Todo
    filterTodos(type: string) {
        this.activeType = type
    }

    /**
     * 异步测试
     * loadingStore.get('loading')判断异步请求状态
     */
    async onTest() {
        console.log(`${this.rootStore.propsStore.props.testMsg} props to store`)
        const [err, res] = await fetch('./index.html').then(res => res.text()).then(res => [null, res])
        runInAction(() => {
            this.featchData = res || ''
        })
    }

}
    