import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Filter from "./Components/Filter";
import Search from "./Components/Search";
import TodoList from "./Components/TodoList";
import DateTimePicker from "react-datetime-picker";

function App() {
  const [todos, setTodos] = useState([]);

  const [completedStatus, setCompletedStatus] = useState("all");
  const handleChange = (e) => {
    if (e.target.value === "all") {
      setCompletedStatus("all");
    } else if (e.target.value === "completed") {
      setCompletedStatus("completed");
    } else {
      setCompletedStatus("incomplete");
    }
  };

  const handleCheckBox = async (e)=>{
    console.log(e.target.checked);
  }
  const fetchtodos = async () => {
    const response = await fetch("http://127.0.0.1:8000/todos/");
    const data = await response.json();
    console.log(data);
    setTodos(data);
  };

  useEffect(() => {
    fetchtodos();
  }, []);

  return (
    <div className="todo-container">
      <select onChange={handleChange}>
        <option value={"all"}>All</option>
        <option value={"completed"}>Completed</option>
        <option value={"incomplete"}>Incompleted</option>
      </select>
      <TodoList completedStatus={completedStatus} todos={todos} handleCheckBox={handleCheckBox}/>
    </div>
  );
}

export default App;
