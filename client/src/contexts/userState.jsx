import {useState} from 'react';
import { userContext } from './userContext';

function UserState (props){

    let [ userState , setUserState] = useState(null);

    return (
        <userContext.Provider value={{userState , setUserState}}>
            {props.children}
        </userContext.Provider>
    )

}

export default UserState;