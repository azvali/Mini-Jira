import './Login.css'
import { useState, useEffect } from 'react';


function Login(){

    //create useEffect to fetch cookie if exist


    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    return(
        <>
            <div className='login-container'>
                <div className='title-container'>
                    <h1>Mini-Jira</h1>
                </div>
                <div className='creds-container'>
                    <label htmlFor="username-input">Username: </label>
                    <input id='username-input' type='text'/>
                    <label htmlFor="password-input">Password: </label>
                    <input id='password-input' type="password" />
                </div>
                <div className='footer-container'>
                    <div className='button-container'>
                        <button className='login-button'>Login</button>
                    </div>
                    <div className='create-forgot-container'>
                        <a href='/forgot'>Forgot Password?</a>
                        <a href='/signup'>Create Account</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;