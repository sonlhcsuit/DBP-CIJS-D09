import { Component } from "react";
import "./../assets/stylesheets/SignIn.css"
class SignIn extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <form className="signin-cont" onKeyDown={(e) => e.key === 'Enter' ? this.handleSubmit() : null}>
            <div className="signin-comp title">
                <h1>Sign In</h1>
                <small>Please sign in for better experience</small>
            </div>
            <div className="signin-comp">
                <label htmlFor="">Username</label>
                <input type="text" name="" id="username" onChange={(e) => this.handleChange(e, 'username')} placeholder="Enter your username or email" />
            </div>
            <div className="signin-comp">
                <label htmlFor="">Password</label>
                <input type="password" name="" id="password" onInput={(e) => this.handleChange(e, 'password')} placeholder="Enter your password" />
            </div>
            <div className="signin-comp opt ">
                {/* <a href="/forgot" >Forgot Password?</a> */}
                {/* <Link path="/signup"> */}
                    <p>Sign Up</p>
                {/* </Link> */}
            </div>
            <div className="signin-comp">
                <input type="button" value="Sign In" onClick={this.handleSubmit} />
            </div>
        </form >
        )
    }
}

export {
    SignIn
}