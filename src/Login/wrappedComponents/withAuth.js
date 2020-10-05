import React, {useState} from 'react'
import TodoList from '../../Todo/TodoList'

const withAuth = (WrappedComponent) => {
    function WithAuth() {

        const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("token") ? true: false);

        function onLoginButtonCLicked() {
            localStorage.setItem("token", "abcd");
            setIsLoggedIn(true);
        }

        return (
            <div>
                {isLoggedIn ? <TodoList /> : <WrappedComponent onLoginButtonCLicked={onLoginButtonCLicked}/>}
            </div>
        )
    }
    return WithAuth;
}

export default withAuth