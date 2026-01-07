import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
            sno = 1;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }

        const newTodo = {
            sno: sno,
            title: title,
            desc: desc,
            completed: false,
            createdAt: new Date().toISOString()
        };
        setTodos([...todos, newTodo]);
    };

    const onDelete = (todo) => {
        setTodos(todos.filter((e) => e !== todo));
    };

    const onEdit = (updatedTodo) => {
        setTodos(todos.map(todo =>
            todo.sno === updatedTodo.sno ? updatedTodo : todo
        ));
    };

    const toggleComplete = (todo) => {
        setTodos(todos.map(t =>
            t.sno === todo.sno ? {...t, completed: !t.completed} : t
        ));
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const clearAll = () => {
        setTodos([]);
    };

    return (
        <Router>
            <div className="App d-flex flex-column min-vh-100">
                <Header title="Listify" search={false}/>

                <main className="flex-grow-1 py-4">
                    <Container>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Row className="justify-content-center">
                                        <Col lg={8}>
                                            <div className="shadow-lg rounded-4 p-4 mb-4"
                                                 style={{backgroundColor: '#f8f9fa'}}>
                                                <h2 className="text-center mb-4" style={{color: '#2c3e50'}}>
                                                    <i className="bi bi-check2-circle me-2"></i>
                                                    Manage Your Tasks
                                                </h2>
                                                <AddTodo addTodo={addTodo}/>
                                            </div>

                                            <Todos
                                                todos={todos}
                                                onDelete={onDelete}
                                                onEdit={onEdit}
                                                toggleComplete={toggleComplete}
                                                clearCompleted={clearCompleted}
                                                clearAll={clearAll}
                                            />
                                        </Col>
                                    </Row>
                                }
                            />

                            <Route path="/about" element={<About/>}/>
                        </Routes>
                    </Container>
                </main>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;