import React,{Component} from "react";
class TodoItems extends Component{
    constructor(props){
        super(props);
        this.createTasks=this.createTasks.bind(this);
       // this.delete=this.delete.bind(this);
    }
    createTasks(item){
        return (<span key={item.key}>
            <li>{item.text}</li>
            <button onClick={this.edit.bind(this,item.key)}>Edit</button>
            <button onClick={this.delete.bind(this,item.key)}>
            Delete</button>
            </span>);
}
edit(key){
    this.props.edit(key);
}
    delete(key){
        this.props.delete(key);
    }
    render(){
        var todoEntries=this.props.entries;
        var listItems=todoEntries.map(this.createTasks);
        return (
            <ul className="List">
                {listItems}
            </ul>
        );
    }
}
export default TodoItems;