import React from "react";
class LoginController extends React.Component{
    constructor(props){
        super(props);
        this.state={ IsLoggedIn:true};
        this.handleLoginEvent=this.handleLoginEvent.bind(this);
        this.handleLogoutEvent=this.handleLogoutEvent.bind(this);
    }
    handleLoginEvent(){
        this.setState(
            {IsLoggedIn : true}
        );
    }
    handleLogoutEvent(){
        this.setState(
            {IsLoggedIn:false}
        );
    }
    render(){
        var button;
        const isLoggedIn=this.state.IsLoggedIn;
        if(isLoggedIn){
            button=<LogoutButton onClick={this.handleLogoutEvent}/>
        }
        else{
            button=<LoginButton onClick={this.handleLoginEvent}/>
        }
        return (<div>
            <Greetings IsLoggedIn={isLoggedIn}/>
            {button}
        </div>);
    }

};
function LogoutButton(props){
    return (<button onClick={props.onClick}>Logout</button>);
}
function LoginButton(props){
    return (<button onClick={props.onClick}>Login</button>);
}
function Greetings(props){
    const isLoggedIn=props.IsLoggedIn;
        if(isLoggedIn){
            return <UserGreetings/>;
        }
        else{
            return <SignUpGreetings/>;
        }
}
function UserGreetings(){
    return(
        <h1>Welcome Back!</h1>
    )
}
function SignUpGreetings(){
    return (
        <h1>Please SignUp</h1>
    );
}
export default LoginController;