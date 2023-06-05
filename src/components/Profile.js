import { useEffect } from "react";

const Profile = (props) => {

    useEffect(()=>{
        const id = setInterval(()=>{
            console.log("From SetInterval after 1 sec");
        }, 1000);

       return() => {
        clearInterval(id);
        console.log("Component Unmounted")
       } 
    });

    return (
        <div>
            <h2> Profile Page - {props.name}</h2>
        </div>
    );
}
export default Profile;