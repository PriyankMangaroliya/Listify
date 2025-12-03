import React from 'react';
import TodoItem from "./TodoItem";

const Todos = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Todos List</h1>
            {props.todos.length === 0 ?
                "Not Todos in List"
                :
                props.todos.map((todo) => {
                    return (
                        <TodoItem todos={todo} key={todo.sno} onDelete={props.onDelete}/>
                    )
                })}
        </div>
    );
}

export default Todos;