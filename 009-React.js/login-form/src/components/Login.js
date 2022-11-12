import React from 'react';
import Input from '../components/Input'

function Login(props) {
    return(
        <form className="form">
            <Input type="text" placeholder="Username"/>
            <Input type="password" placeholder="Password"/>
            {
                props.buttonValue === "Register" && <Input type="password" placeholder="Confirm Password"/>
            }
        </form>
    );
}

export default Login;