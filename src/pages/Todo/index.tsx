import { observer, useSyncProps } from "@quarkunlimit/qu-mobx";
import { useEffect } from "react";
import AddTodo from "./AddTodo";
import { Provider, useStore } from "./store/RootStore";
import TodoLists from "./TodoLists";
import VisibilityFilters from "./VisibilityFilters";
import { memo} from 'react'
interface IProps {
  testMsg: string
}

const Todo = observer((props: IProps) => {
  // console.log(props);
  const root = useStore()
  const { todoStore } = root

  // 将props数据传到指定store
  useSyncProps<IProps>(root, ['testMsg'], props);
  const loading = todoStore.computed.loading

  
  // 测试qu-mobx异步获取数据
  useEffect(() => {
    todoStore.logic.onTest()
  }, [])


  return <div className="todo-page">
    <h2 style={{textAlign: 'center'}}>{props.testMsg}</h2>
    {/* {
      !loading ? (<h3>{todoStore.logic.featchData ?? 'loading'}</h3>) : <span>loading...</span>
    } */}
    <AddTodo />
    <TodoLists />
    <VisibilityFilters />
  </div>;
});

export default observer(function TodoPage(props: IProps) {
  return (
    <Provider>
      <Todo {...props} />
    </Provider>
  );
});
