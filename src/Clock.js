import React, {Component} from "react";
import ReactDOM from "react-dom";
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
        this.tick = this.tick.bind(this);
    }
    tick () {
        this.setState(
            {date: new Date()}
        );
    }
    componentDidMount(){
        var that = this;
        this.Timer = setInterval(this.tick,1000);
    }
    componentWillUnmount()
    {
        clearInterval(this.Timer);
    }
   
    render(){
        return (
            <div>
                <h3>"Hello World!"</h3>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    
    }
}
export default Clock;