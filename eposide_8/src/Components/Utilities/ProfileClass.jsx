import React from "react";

class ProfileClass extends React.Component{

    constructor(props){
        super(props);
        // create state
        this.state ={
            count : 0,
            age : 19,
            userInfo: {
                name: "",
                location : ""
            }
        }

        // first call
        console.log("Constructor")
    }

    async componentDidMount(){
        // API Calls
        // then this call
        // const response = await fetch("https://api.github.com/users/abhishek")
        // const json = await response.json()

        // this.setState({
            // userInfo : json
        // })

        this.timer = setTimeout(()=> {
            console.log("The Antojitos App")
        }, 1000)

        console.log("Component Did Mount")
    }

    componentDidUpdate(prevProps, prevState){
        // it is called after update the dom

        if (this.state.count !== prevState.count){
            // code
        }

        console.log("Component Will Update")
    }

    componentWillUnmount(){
        clearInterval(this.timer)
        // when we go to another page component will destroy
        console.log("Component Unmount")
    }

    render(){

        // second call
        console.log("render")

        return (
            <div>
                <h1>Profile class Component</h1>
                <h2>My name is {this.state.userInfo.name} and i'm {this.state.age} year's old.</h2>
                <h2>{this.state.userInfo.location}</h2>
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