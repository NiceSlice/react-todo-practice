import React from "react";
import Header from "./Header";
import TodoContainer from "./TodoContainer";
import TodoItem from "./TodoItem";

class Layout extends React.Component{
    state = {
        inputValue: "",
        ToDos: [],
        idCounter: 1
    }

    onChange = event => {
        this.setState({ inputValue: event.target.value })
    }

    saveToDo = () => {
        if(this.state.inputValue){
            this.setState({ inputValue: "",
            ToDos: [ ...this.state.ToDos, {id: this.state.idCounter, text: this.state.inputValue} ],
            idCounter: this.state.idCounter + 1 })
        }
    }

    
    deleteItem = id => {
        this.setState({ ToDos: this.state.ToDos.filter(todo => todo.id !== id) })
    }
    



    render(){
        return(
            <div className="container">
                <Header></Header>

                <TodoContainer saveToDo={this.saveToDo} onChange={this.onChange} inputValue={this.state.inputValue} ></TodoContainer>

                {this.state.ToDos.map(todo => <TodoItem
                    deleteItem={this.deleteItem}
                    key={todo.id}
                    todo={todo} />)}

            {this.props.children}
            </div>
        )
    }
}

export default Layout;