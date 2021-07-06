import { Component } from "react";
import "./../assets/stylesheets/SignUp.css"

class SignUp extends Component {
    constructor(props) {
        super(props)

        // tạo cái model => ngay trong constructor
        // chỉ ơ constructor mới có quyền gán (khởi tạo, gán state directly)
        this.state = {
            text: this.props.text
        }
    }

    handleEmail = (event) => {
        let value = event.target.value
        this.setState({
            text: `Welcome back to the web, ${value}`
        })
    }

    // Thực hiện chức năng đăng ký
    render() {
        return (
            <form className="signup-cont" >
                <div className="signup-comp title">
                    <h1>Sign Up</h1>
                    <p>{this.state.text}</p>
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="email" placeholder="Enter your email" required  onInput={this.handleEmail} />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="name" placeholder="Enter your name" required />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" placeholder="Enter your username" required />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" placeholder="Enter your password" required />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Re-type password</label>
                    <input type="password" name="" id="avatar" placeholder="Re-type your password" required />
                </div>
                <div className="signup-comp opt ">
                    <div >
                        <input type="checkbox" checked={true} />
                        <label htmlFor="">I agree for the terms and conditions</label>
                    </div>
                    {/* <Link path="/signin"> */}
                    <p>
                        Sign In
                    </p>
                    {/* </Link> */}
                </div>
                <div className="signup-comp">
                    <input type="button" value={this.props.btnValue} onClick={this.handleSubmit} />
                </div>
            </form >
        )
    }
}

export {
    SignUp
}

// Component => giống giống tương tự như 1 function
function name(param1, param2, param3) {
    // props ~ parameter
    // state ~ local variable
    let a = 1
    let b = 2
    let c = 3
    // param1 = "?" => should be banned
}