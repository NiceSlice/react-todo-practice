import React from "react";
import Todo from "./Todo";
import SaveButton from "./SaveButton";
import TodoItem from "./TodoItem";

class TodoContainer extends React.Component{

    onChange = event => {
        this.props.onChange(event);
    }

    saveToDo = () => {
        this.props.saveToDo();
    }

    render(){
        return(
            <div className="todo-container">
                <Todo onChange={this.onChange} value={this.props.inputValue} />
                <SaveButton saveToDo={this.saveToDo} />

                {this.props.children}
            </div>
        )
    }
}

export default TodoContainer;