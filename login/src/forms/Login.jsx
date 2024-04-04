import React, { useState } from "react";
import logo from '../assets/logo.png';
import Sidebar from '../components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelfieOut from '../pages/SelfieOut';
import SelfieIn from '../pages/SelfieIn';
import Overtime from '../pages/Overtime';
import History from '../pages/History'

const Login = ({ onSubmit, onSwitchForm }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5174/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                //Show dashboard
                setIsLoggedIn(true);
                console.log(data.message);
            } else {
                // Registration failed
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error occurred while registering:', error);
        }
    };

    return (
        <div className="">
            {
                isLoggedIn ? (
                    <BrowserRouter>
                        <Sidebar>
                            <Routes>
                                <Route path="/selfiein" element={<SelfieIn />} />
                                <Route path="/history" element={<History />} />
                                <Route path="/selfieout" element={<SelfieOut />} />
                                <Route path="/overtime" element={<Overtime />} />
                            </Routes>
                        </Sidebar>
                    </BrowserRouter>
                ) : (
                    <div className="App">
                    <div className="auth-form-container">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Inzpect Technologies Inc.</h2>
                        <form className="login-form" onSubmit={handleSubmit}>
                            <label htmlFor="username">Username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="your username" id="username" name="username" />
                            <label htmlFor="password">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="your password" id="password" name="password" />
                            <br />
                            <button type="submit">Log In</button>
                        </form>
                        <button className="link-btn" onClick={() => onSwitchForm('register')}>Don't have an account? Register here.</button>
                    </div>  </div>)
            }
        </div>
      
    );
};

export default Login;
