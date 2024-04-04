import React from 'react';
import gifIcon from '../timein.gif';
import Footer from '../components/Footer';

const SelfieIn = () => {
    return (
        <>  
        <div className="employee-background">
            <div>
                <h2>Employee Time - In</h2>
            <div className= "employee-container">
                <p style={{ color: '#6582BD', fontSize: '20px', }}>Hi, Good day, Inzpect Employee!</p>
                 <img src={gifIcon} alt="GIF Icon" className="gif-icon" /> <br></br><br></br>
                 <p>Time In Form</p><br></br>
                 <button type="submit">Take a Selfie now!</button>
                
            </div> 
            </div>
            <Footer/>
        </div>  
        </>
    );
};

export default SelfieIn;