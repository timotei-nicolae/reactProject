import React from "react";
import TodoItem from "./TodoItem"
import todosData from "./todosData"

function App(){
    const TodoItems=todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return(
        <div className="todo-list">
            {TodoItems}
        </div>
    )
}

export default App