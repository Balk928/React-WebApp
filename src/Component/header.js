import React from 'react';

class header extends React.Component
{
    state = {
        todoText : ""
    };
    changeTodoText = event =>{
        this.setState
        (
            {
              todoText : event.target.value
            }
        );
    };
    submitHandler = event =>{
        Event.preventDefault();
        this.props.addTodoState(this.state.todoText);
        this.setState(
            {todoText:""}
        );
    };
    render(){
{
    return(
        <div>
       <form onSubmit = {this.submitHandler}>
         <input
          type= 'text'
           onChange = {this.submitHandler}
           value = {this.state.todoText}/>
           <button type = "submit">Add</button>
           </form>
       </div>
    );
}
    }
}
export default header;