import React, { useState } from "react";
import logo from '../assets/logo.png';

const Register = ({ onSwitchForm }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:5174/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    username,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                // Registration successful
                console.log(data.message);
                onSwitchForm( 'login' );
            } else {
                // Registration failed
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error occurred while registering:', error);
        }
       
    };

    return (
        <div className="App">
            <div className="auth-form-container">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Inzpect Technologies Inc.</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder="Fullname" autoComplete="username" />
                    <label htmlFor="username">Username</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter your Username" id="username" name="username" autoComplete="username" />
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Your password" id="password" name="password" />
                    <button type="submit">Signup</button>
                </form>
                <button className="link-btn" onClick={() => onSwitchForm('login')}>Already have an account? Login here.</button>
            </div>
        </div>
    );
};

export default Register;
