import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items :[],
            item : null
        }
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.editItem=this.editItem.bind(this);
        this.UpdateItem=this.UpdateItem.bind(this);
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
    UpdateItem(){
            console.log("entered update");
            var item= this.state.item;
            console.log(item);
            item.text=this.inputElement.value;
            this.setState({
                item : null
            })
    }
    editItem(key){
        console.log("entered edit");
        var filteredItem=this.state.items.filter(function(item){
            return (item.key===key);
        })
        this.setState({
            item : filteredItem
        });
        var item= this.state.item;
        console.log(item);
        this.inputElement.value=filteredItem[0].text;
        // this.deleteItem(key);
    }

    deleteItem(key){
            var filteredItems=this.state.items.filter(function(item){
                return(item.key!==key)
            });
            console.log(filteredItems);
            this.setState({
                items: filteredItems
            });
    }
    render()
    {
      return(  
        <div className= "Todolist">
            <div>
                <input ref={(a)=> this.inputElement=a }placeholder="Enter Task"></input>
                <button type="submit" onClick={this.addItem}> ADD </button>
                <button type="submit" onClick={this.updateItem}> Update </button>
            </div>
            <TodoItems entries={this.state.items}
                        delete={this.deleteItem} 
                        edit={this.editItem} />
        </div>    
      );
    }
}
export default TodoList;
