import React, { Component } from "react";
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
    }

    render(){
        const TodoItems=this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
        return(
            <div className="todo-list">
                {TodoItems}
            </div>
        )
    }
}

export default App