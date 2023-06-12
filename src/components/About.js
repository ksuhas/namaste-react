import { Component } from 'react';
import ProfileFunctionalComp from './Profile';
import Profile from "./profileClass";
import UserContext from '../utils/userContext';
class About extends Component {

    constructor(props) {
        super(props);
        console.log("Parent- contructor");
    }

    componentDidMount() {
        console.log("Parent- componentDidMount");
    }

    render() {
        console.log("Parent- render");
        return (
            <div className='container'>
                <h1>About Us Page</h1>
                <UserContext.Consumer>
                    {({ user }) => <h1>{user.name} - {user.email}</h1>}
                </UserContext.Consumer>
                <ProfileFunctionalComp name={"Suhas"} />
                {/* <Profile name={"Khulpe"} /> */}
                <p>This is the Namaste React Live Course from About US page</p>
            </div>
        )
    }
}

export default About;