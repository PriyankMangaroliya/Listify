import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import {useState} from "react";

function App() {

    const [todos, setTodos] = useState([
        {sno: 1, title: "React", desc: "React Video"},
        {sno: 2, title: "React Native", desc: "React Native"},
        {sno: 3, title: "Node.js", desc: "Node.js Video"},
    ]);

    const onDelete = (todo) => {
        console.log("Delete", todo);
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }))
    }

    return (
        <>
            <Header title="Todo List" search={false}/>
            <AddTodo />
            <Todos todos={todos} onDelete = {onDelete}/>
            <Footer/>
        </>
    );
}

export default App;