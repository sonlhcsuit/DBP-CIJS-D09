import { Component } from "react";
import "./../assets/stylesheets/SignIn.css"

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password:null
        }
    }

    handleUsername = (event) => {
        let username = event.target.value
        // this.state.username = username -> không nên làm!!!
        this.setState({
            username: username
        })
    }

    handlePassword = (event) => {
        let password = event.target.value
        // this.state.username = username -> không nên làm!!!
        this.setState({
            password: password
        })
    }

    handleSignIn = () => {
        // username: admin1234
        // password: admin4321
        let username = localStorage.getItem("username")
        let password = localStorage.getItem("password")
        // localStorage.setItem("key","value") => lưu trữ trong localStorage
        let name = localStorage.getItem("name") || "admin"
        if (username == this.state.username && password == this.state.password){
            alert(`Welcome back, ${name}`)
        }else{
            alert(`Sign in information is wrong`)
        }
    }

    handleEnter= (event)=>{
        if (event.key == "Enter"){
            this.handleSignIn()
        }
    }

    render() {
        return (
            <form className="signin-cont" >
                <div className="signin-comp title">
                    <h1>Sign In</h1>
                    <small>Please sign in for better experience</small>
                </div>
                <div className="signin-comp">
                    <label htmlFor="">Username</label>
                    {/* bind ô input này với lại state? */}
                    <input type="text" name=""
                        id="username" placeholder="Enter your username or email"
                        onInput={this.handleUsername} onKeyDown={this.handleEnter}
                    />
                </div>
                <div className="signin-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" placeholder="Enter your password"
                        onInput={this.handlePassword}  onKeyDown={this.handleEnter}
                    />
                </div>
                <div className="signin-comp opt ">
                    <p>Sign Up</p>
                </div>
                <div className="signin-comp">
                    <input type="button" value="Sign In"
                        onClick={this.handleSignIn}
                    />
                </div>
            </form >
        )
    }
}

export {
    SignIn
}