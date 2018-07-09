import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items :[]
        }
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    addItem(e)
    {
        if(this.inputElement.value!=="")
        {
            var newItem={
                text: this.inputElement.value,
                key: Date.now()
            }
        };
    this.setState((prevState)=>{
    return {
        items: prevState.items.concat(newItem)
        }
    });
        this.inputElement.value="";
        e.preventDefault();
    }
    deleteItem(key){
            console.log(key);
            var filteredItems=this.state.items.filter(function(item){
                return(item.key!==key)
            });
            this.setState({
                items: filteredItems
            });
    }
    render()
    {
      return(  
        <div className= "Todolist">
            <form onSubmit={this.addItem}>
                <input ref={(a)=> this.inputElement=a }placeholder="Enter Task"></input>
                <button type="submit"> ADD </button>
            </form>
            <TodoItems entries={this.state.items}
                        delete={this.deleteItem} />
        </div>    
      );
    }
}
export default TodoList;
