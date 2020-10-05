import React from 'react'

import withAuth from './wrappedComponents/withAuth'

function LoginPage(props) {
    
    return (
        <div>
            <h3>Login to Your account</h3>
            <br />
            <label>
                Email:
                <input
                    type="text"
                    name="text"
                    placeholder="Enter your Email"
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your Password"
                />
            </label>
            <br />
            <button onClick={props.onLoginButtonCLicked}>Login</button>
        </div>
    )
}

export default withAuth(LoginPage)