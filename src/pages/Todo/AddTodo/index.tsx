import { observer } from "@quarkunlimit/qu-mobx"
import { useState } from "react"
import { useStore } from "../store/RootStore"
import './index.scss'

const AddTodo = () => {
  const [inputValue, setInputValue] = useState('')
  const root = useStore()
  const { todoStore } = root

  const hanldInputChange = (value: string) => {
    setInputValue(value)
  }

  const clickAddTodo = () => {
    if (!inputValue) return
    todoStore.logic.addTodo(inputValue)
    setInputValue('')
  }

  return(
   <div className="add-todo">
      <input type="text" placeholder="请输入" className="add-todo__field" value={inputValue} onChange={(e) => hanldInputChange(e.target.value)} />
      <button className="add-todo__button" onClick={clickAddTodo}>Add Todo</button>
   </div>
  )
}

export default observer(AddTodo)