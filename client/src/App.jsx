import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Filter from "./Components/Filter";
import Search from "./Components/Search";
import TodoList from "./Components/TodoList";
import DateTimePicker from 'react-datetime-picker';



function App() {

  // const [value, onChange] = useState<Value>(new Date());

  const [todos, setTodos] = useState([
    { id: 0, task: "Arrange books alphabetically", status: "Active" },
    { id: 1, task: "Try a new recipe", status: "Active" },
    { id: 2, task: "Take a 30-minute walk", status: "Active" },
    { id: 3, task: "Declutter desk for 20 minutes", status: "Active" },
  ]);


// add todo function
  const addTodo = (data) => {
    setTodos( [ ...todos, data={...data, id:parseInt(todos[todos.length-1].id) + 1, status:"Active"}] )
    console.log(data)
  }
  const fetchtodos = async ()=>{
    const response = await fetch("http://127.0.0.1:8000/admin")
    const data = await response.json()

    setTodos(data)
  }

  // delete function
  const delTodo = (id) => {
    setTodos(todos.filter( todo => todo.id != id ))
  }


  // update function
  const updateTodo = (e, id, text) => {
    e.preventDefault()
    // this line helps to get the current todo based on the ID called todoId in TodoList
    const todo = todos[id]
    const updatedUser = { ...todo, task:text, status:"Active" }
    setTodos(todos.map(t => t.id == todo.id ? updatedUser : t))

  }

  const completeTodo = (e, id) => {

    if(e.target.checked){
      console.log("okay")
      setTodos(todos.map(todo => todo.id == id ? { ...todo, status:"Completed"}: todo))
    }
    else
    {
      console.log("omo")
      setTodos(todos.map(todo => todo.id == id ? { ...todo, status:"Active"}: todo))
    }

   
  }

  const filterTodo = (cat_value) => {
    // setTodos(todos.filter(todo => todo.status == cat_value))
    setTodos(todos.filter((todo) => todo.status == cat_value))
  }


  return (
    <div className="todo-container">
      <Search addTodo = { addTodo } />
      <Filter filter_todo = { filterTodo }/>
      <TodoList todos = { todos } delTodo = { delTodo } update_todo = { updateTodo } complete_todo = { completeTodo } filter_todo = { filterTodo } />
      {/* <DateTimePicker onChange={onChange} value={value} /> */}
    </div>
    
  );
}



export default App;