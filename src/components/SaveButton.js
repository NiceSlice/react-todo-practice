import React from "react";

class SaveButton extends React.Component{

    render(){
        return(
            <button onClick={this.props.saveToDo} className="save-button" >Save</button>
        )
    }
}

export default SaveButton;