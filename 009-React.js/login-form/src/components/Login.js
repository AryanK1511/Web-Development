import React from 'react';
import Input from '../components/Input'

function Login() {
    return(
        <form className="form">
            <Input type="text" placeholder="username"/>
            <Input type="password" placeholder="password"/>
            <button type='submit'>Login</button>
        </form>
    );
}

export default Login;