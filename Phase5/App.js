import React, { Component } from "react";
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends Component {
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        console.log("Cahnged", id)
    }

    render(){
        const TodoItems=this.state.todos.map(item => <TodoItem key={item.id} item={item}
        handleChange={this.handleChange}/>)
        return(
            <div className="todo-list">
                {TodoItems}
            </div>
        )
    }
}

export default App