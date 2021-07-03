import { Component } from "react";
import { NavigationItem } from './NavigationItem';

class Navigation extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div style={{
                border: "1px solid red",
                display: "flex",
                flexDirection :"row-reverse",
                justifyContent: "space-around"
            }}>
                <NavigationItem t="home"/>
                <NavigationItem t="news"/>
                <NavigationItem t="about"/>
            </div>
        )
    }
}
export {
    Navigation
}