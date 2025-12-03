import React from 'react';

const TodoItem = ({todos, onDelete}) => {
    return (
        <div className="container">
            <h4>{todos.title}</h4>
            <p>{todos.desc}</p>
            <button className="btn btn-danger" onClick={()=>{onDelete(todos)}}>Delete</button>
        </div>
    );
};

export default TodoItem;