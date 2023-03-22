import React, { useContext } from "react";
import cx from "classnames";
import { observer } from "@quarkunlimit/qu-mobx";
import { useStore } from "../store/RootStore";
import './index.scss'
import { ITodoItem } from "../store/RootStore/TodoStore/interface";

interface IPropsType {
  todo: ITodoItem;
  index: number;
}

function Todo({ todo, index }: IPropsType) {

  const root = useStore()
  const { todoStore }  = root
  return (
    <li
      onClick={() => todoStore.logic.toggleTodo(todo.id || 0)}
      className={cx("todo-item", {
        "todo-item--completed": todo.completed,
      })}
      title={todo.completed ? "标记为未完成" : "标记为已完成"}
    >
      <input
        className="todo-item__field"
        checked={todo.completed}
        type="checkbox"
        onChange={(e) => {
          // e.preventDefault()
        }}
      ></input>
      {`${index}：${todo.completed ? "👌" : "👋"}${todo.content}`}
    </li>
  );
}

export default observer(Todo);
