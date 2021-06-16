import React from 'react';
import Todo from "./Todo";

function Todos(props) {
    return (
        <div className="todos">
            {props.todos.map((todo, index) => {
                return (
                    <Todo
                        todo={todo}
                        index={index}
                        makeFavorite={props.makeFavorite}
                        deleteTodo={props.deleteTodo}
                    />
                )
            })}
        </div>
    );
}

export default Todos;