import React from "react";
class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }
handleChange(e){
    console.log(e.target.value);
    this.props.onTemperatureChange(e.target.value);
}
render(){
    const temp=this.props.temperature;
    const scale=this.props.scale;
    return(
        <fieldset>
            <legend>Enter the temperature in {scale}</legend>
            <input value={temp} onChange={this.handleChange}></input>
        </fieldset>
    )
}
}
export default Temperature;