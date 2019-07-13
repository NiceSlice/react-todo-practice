import React from "react";


class TodoItem extends React.Component{
    state = {
        isChecked: false
    }

    toggleCheckbox = () => {
        this.setState({ isChecked: !this.state.isChecked })
    }

    deleteItem = () => {
        this.props.deleteItem(this.props.todo.id)
    }



    render(){
        if(this.state.isChecked){
            return(
                <div className="todo-item" >

                <p className="crossed">
                {this.props.todo.text}

                <button
                onClick={this.deleteItem}
                className="checkbox">×</button>

                <input type="checkbox" className="checkbox" onClick={this.toggleCheckbox}></input>
                </p>

                {this.props.children}
            </div>
            )
        }
        return(
            <div className="todo-item" >
                <p>
                {this.props.todo.text}

                <button
                onClick={this.deleteItem}
                className="checkbox">×</button>

                <input type="checkbox" className="checkbox" onClick={this.toggleCheckbox}></input>
                </p>

                {this.props.children}
            </div>
        )
    }
}

export default TodoItem;