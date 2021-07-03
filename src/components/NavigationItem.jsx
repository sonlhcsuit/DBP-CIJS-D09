import { Component } from "react";

class NavigationItem extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <p  style={{
                border: "1px solid black",
                display: "block",
                width: "10vw",
            }}
            >{this.props.t}</p>
        )
    }
}

export {
    NavigationItem,
}