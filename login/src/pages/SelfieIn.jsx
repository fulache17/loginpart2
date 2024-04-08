import React, {useState, useRef, useEffect } from 'react';
import gifIcon from '../timein.gif';
import Footer from '../components/Footer';


const SelfieIn = () => {
    const [showCamera, setShowCamera] = useState(false);
    const videoRef = useRef(null);
    const photoRef = useRef(null);

    const getUserCamera =() => {
        navigator.mediaDevices.getUserMedia({
            video: true
        })
        .then((stream) => {
            const video = videoRef.current;
            if(video) {
                video.srcObject = stream;
                video.play();
            }
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const takePicture = () => {
        const width = 500;
        const height = width / (4/3);

        const photo = photoRef.current;
        const video = videoRef.current;

        photo.width = width;
        photo.height = height;

        const ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, photo.width, photo.height);

    };

    const clearImage= () => {
        const photo = photoRef.current;
        const ctx = photo.getContext('2d');
        ctx.clearRect(0, 0, photo.width, photo.height);
    };

    useEffect(() => {
        if (showCamera) {
            getUserCamera();
        }
    }, [showCamera]);

    return (
        
        <div className="employee-background">
            <div>
                <h2>Employee Time - In</h2>
                {!showCamera && 
            <div className= "employee-container">
                <p style={{ color: '#6582BD', fontSize: '20px', }}>Hi, Good day, Inzpect Employee!</p>
                 <img src={gifIcon} alt="GIF Icon" className="gif-icon" /> <br></br><br></br>
                 <p>Time In Form</p><br></br>
                 <button type="button" onClick={() => setShowCamera(true)}>Take a Selfie now!</button>
            </div>
            }
              {showCamera &&
              <div className='selfie-container'>
                <video className='container-taena' ref={videoRef}></video>
                <button onClick={takePicture} className='selfie-button'>Take Selfie</button>
                <br/>
                <canvas className='clear-container' ref={photoRef}></canvas>
                <button onClick={clearImage} className='clear-button'>Clear Image</button>
                </div>
            }
              </div>
            <Footer/>
        </div>  
        
    );
};

export default SelfieIn;