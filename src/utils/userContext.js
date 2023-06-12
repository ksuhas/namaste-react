import { createContext } from "react";

const UserContext = createContext({
    user : {
        name: "Suhas Khulpe",
        email: 'sk@gmail.com'
    }
});

UserContext.displayName = 'UserContext';

export default UserContext;