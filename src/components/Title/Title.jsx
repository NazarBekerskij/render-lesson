import { Component } from "react";

class Title extends Component{
    render(){
        const {text} = this.props
        return(
            <h1>{text}</h1>
        )
    }
}

export default Title