import React from 'react';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo : {
                name : 'Dummy Name',
                location : 'Dummy Location'
            }
        };   
        console.log("Child - Constructor");
    }

    async componentDidMount(){
        // Called once after component mount
        const data = await fetch('https://api.github.com/users/ksuhas');
        const json = await data.json();
        this.setState({userInfo : json});
        console.log("Child - componentDidMount");
    }

    componentDidUpdate(){
        // Called after every render
        console.log("Child - componentDidUpdate");
    }

    componentWillUnmount(){
        // Called after every render
        console.log("Child - componentWillUnmount");
    }

    render() {
        console.log("Child - render");
        return (
            <div>
                <h1>Profile Class Name</h1>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name - {this.state.userInfo.name}</h2>
                <h2>Location - {this.state.userInfo.location}</h2>
            </div>
        )
    }
}

export default Profile;