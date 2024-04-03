import React, { useState } from "react";
import './App.css';
import Login from "./forms/Login";
import Register from "./forms/Register";

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSwitchForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleRegisterSubmit = (userData) => {
    // Handle the form submission for registration
    console.log('Register form submitted:', userData);
  };

  return (
    <div>
      {isRegistering ? (
        <Register onSwitchForm={handleSwitchForm} />
      ) : (
        <Login onSwitchForm={handleSwitchForm} />
      )}
    </div>
  );
};

export default App;
