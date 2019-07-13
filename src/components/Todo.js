import React from "react";

class Todo extends React.Component{
    
    render(){
        return(
            <input type="text" placeholder="ToDo..." maxLength="100" onChange={this.props.onChange} value={this.props.value} className="todo" />
        )
    }
}

export default Todo;