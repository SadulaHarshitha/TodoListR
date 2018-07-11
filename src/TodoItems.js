import React,{Component} from "react";
import EditableLabel from "react-inline-editing";
class TodoItems extends Component{
    constructor(props){
        super(props);
        this.createTasks=this.createTasks.bind(this);
    }
    createTasks(item){
        return (<div key={item.key} className="Item">
                <EditableLabel text={item.text}
                                labelClassName='myLabelClass'
                                inputClassName='myInputClass'/>
                <button onClick={this.delete.bind(this,item.key)}>
                Delete</button>
                </div>);
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