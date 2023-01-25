import { useEffect, useState } from 'react'
import { TodoList } from "./comp/TodoList";
import { AddTodo } from "./comp/AddTodo";


function App() {
  const [list, setList] = useState([])
  
  useEffect(() => { 
    setList(JSON.parse(localStorage.getItem('list') || [] ))
  }, [] )
  
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const addListHandler = (todoInp) => {
    const newTodo = {
      todo: todoInp,
      id: Math.random().toString(),
      complete: false,
      date: new Date().toDateString()
    }
    if (todoInp) {
      setList([...list, newTodo])
    }
  }

  const toggleHandler = (id) => {
    setList([
      ...list.map((todo) => todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })
    ])
  }

  const deleteList = (id) => {
    console.log('DELETE:', id);
    setList(list.filter(item => item.id !== id))
    console.log(list);
  }



  return <div>
    <AddTodo onAddTodo={addListHandler} />
    <TodoList list={list} toggle={toggleHandler} deleteList={deleteList} />
  </div>
}

export default App;
