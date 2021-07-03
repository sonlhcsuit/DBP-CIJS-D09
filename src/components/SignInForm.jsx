import { Component } from "react";
import "../assets/stylesheets/SignInForm.css";
// react được thiết kế theo hướng
// đối tượng, => bạn phải biết hướng đối
// tượng
class SignInForm extends Component {
    // properties - nhiều thuộc tính. 
    // Là 1 object
    constructor(props) {
        super(props)
        // có thể làm vài thứ gì đó ở 
        // đây
    }

    // 1 hàm gọi render => bắt buộc phải
    // được cài đặt
    
    render() {
        return (
            <div className="main">
                <h1>Day la sign in form</h1>
                <h1>Day la sign in form 2</h1>
                
            </div>

        )
    }
}

export {
    SignInForm,
}

