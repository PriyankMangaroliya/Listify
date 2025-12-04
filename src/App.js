import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    let initialTodos;

    if (localStorage.getItem("todos") === null) {
        initialTodos = [];
    } else {
        initialTodos = JSON.parse(localStorage.getItem("todos"));
    }

    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (title, desc) => {
        let sno;

        if (todos.length === 0) {
            sno = 0;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }

        const newTodo = { sno: sno, title: title, desc: desc };
        setTodos([...todos, newTodo]);
    };

    const onDelete = (todo) => {
        setTodos(todos.filter((e) => e !== todo));
    };

    return (
        <Router>
            <Header title="Todo List" search={false} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <AddTodo addTodo={addTodo} />
                            <Todos todos={todos} onDelete={onDelete} />
                        </>
                    }
                />

                <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
