// example for class based component 
import React from "react";
import { json } from "react-router";

export class UserClass extends React.Component {
    // using props in a class based component 
    constructor (props) {
        super(props);
            // using state variable in a class based componet 
    this.state = { 
        userInfo : {
            login : "Dummy",
            avatar_url : "dummy"
        }
    }
    }

    // this function is used for API in class based componet 
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/ayushtivary")
        const json = await data.json()
        this.setState({
            userInfo : json
        })
        console.log(json)
    }

    // updating state variable 


    render() {
        return (
            <div>
                <h2>name: {this.state.userInfo.login}</h2>
                <h2>location: {this.state.userInfo.avatar_url}</h2>
                <img src= {this.state.userInfo.avatar_url}/>
                {/* <h3>{count}</h3> */}
            </div>
        )
    }
}