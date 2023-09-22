import {useState} from 'react';
import { userContext } from './userContext';

function UserState (props){

    let [ userState , setUserState] = useState({name : "robert" , age : 21});

    return (
        <userContext.Provider value={{userState , setUserState}}>
            {props.children}
        </userContext.Provider>
    )

}

export default UserState;