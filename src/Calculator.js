import React from "react";
import Temperature from "./Temperature";

function toCelcius(fahrenheit){
    return (fahrenheit-32)*5/9;
}

function toFahrenheit(celcius){
    return (celcius*9/5) + 32;
}

function ConvertTo(temperature,scale){
    const temp=parseFloat(temperature);
    if(Number.isNaN(temp)){
        return '';
    }
    var output = scale(temp);
    var rounded= Math.round(output*1000)/1000;
    return rounded.toString();
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature:'',
            scale:'celcius'
        }
        this.handleCelciusChange=this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
    }
handleCelciusChange(temp){
    console.log("In handleCelciusChange");
    this.setState({
        temperature:temp,
        scale:'celcius'
    })
}
handleFahrenheitChange(temp){
    this.setState({
        temperature:temp,
        scale:'fahrenheit'
    })
}
render(){
    var temp=this.state.temperature;
    // console.log(temp);
    var scale=this.state.scale;
    // console.log(scale);
    var celcius= scale==='celcius'? temp : ConvertTo(temp,toCelcius);
    console.log("Temp in celcius:"+ celcius);
    var fahrenheit= scale==='fahrenheit'? temp : ConvertTo(temp,toFahrenheit);
    console.log("Temp in Fahrenheit:"+ fahrenheit);
    return (
        <div>
        <Temperature temperature={celcius} scale='celcius' onTemperatureChange={this.handleCelciusChange}/>
        <Temperature temperature={fahrenheit} scale='fahrenheit' onTemperatureChange={this.handleFahrenheitChange}/> 
        </div>    
    );
}
}
export default Calculator;