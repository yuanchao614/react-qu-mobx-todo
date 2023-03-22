import { useContext } from "react";
import cx from "classnames";
import { observer } from "@quarkunlimit/qu-mobx";
import { useStore } from "../store/RootStore";
import TodoItem from "../TodoItem";
import './index.scss'

// interface PropsType {
//   todoStore: TodoStore;
// }

const TodoLists = () => {
  const root = useStore()
  const { todoStore } = root
  const { todos } = todoStore.computed
  return (
    <ul className="todo-list">
      {todos && todos.length ? (
        <div key={1} className="todo-list-box">
          {todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              index={index + 1}
              key={todo.id}
            />
          ))}
        </div>
      ) : (
        <span className="todo-list__empty" key={2}>
          no todos data!
        </span>
      )}
    </ul>
  );
};

export default observer(TodoLists);
