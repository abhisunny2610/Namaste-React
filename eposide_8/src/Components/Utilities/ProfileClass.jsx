import React from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props);
        // create state
        this.state ={
            count : 0,
            age : 19
        }
    }

    render(){
        return (
            <div>
                <h1>Profile class Component</h1>
                <h2>My name is {this.props.name} and i'm {this.state.age} year's old.</h2>
                <h2>Count : {this.state.count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count: 1,
                    })
                }}>Count +</button>
            </div>
        )
    }
}

export default ProfileClass