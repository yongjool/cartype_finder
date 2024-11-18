import React, { useState } from "react";
import styles from './Body.module.css';
import axios from "axios";

const Body = ({setPredictions}) => {
    const [mycarImage, setImage] = useState('/default.png');
    const [error, setError] = useState(''); // State to hold error message
    const [loading, setLoading] = useState(false);


    // Replace these with your Prediction API details
    const API_URL = process.env.REACT_APP_PREDICTION_URL;
    const PREDICTION_KEY = process.env.REACT_APP_PREDICTION_KEY;

    console.log(API_URL);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        const img = event.target.files[0];

        if (!img) {
            console.log("unknown error")
            setError('unknown error');
            setImage('/default.png'); 
            return;
        }

        const fileType = img.type.split('/')[0];
    
        if (fileType === 'image') {
            setImage(URL.createObjectURL(img));

        } else {
            setError('Please select a valid image file.'); 
            setImage('/default.png'); 
            
            return;
        }
        
        //for loading icon
        setLoading(true);

        //for later use
        const formData = new FormData();
        formData.append("file", img);

        try {
            const response = await axios.post(API_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                "Prediction-Key": PREDICTION_KEY,
            },
            });
            setPredictions(response.data.predictions);

        } catch (error) {
            console.error("Error making prediction:", error);
            setError('Failed to get prediction. Please try again.'); 
        } finally{
            setLoading(false);

        }
    };


  return (
    <div className={styles.grid}>
        {loading && (
            <div className={styles.overlay}>
            <div className={styles.spinner}></div>
            </div>
            )}
      {/* First Column */}
      <div className={styles.grid__column}>
        <img 
          className={styles.grid__image} 
          src="/car.png" 
          alt="car 1" 
        />
        <p className={styles.grid__text}>Upload picture of your car and get estimated insurance rate Now!</p>
      </div>

      {/* Second Column */}
      <div className={styles.grid__column}>
        <img 
          className={styles.grid__image} 
          src={mycarImage} 
          alt="default 2" 
        />
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }} // Hide the file input
          onChange={handleSubmit} // Handle file selection
        />
        <button className={styles.grid__button} 
            onClick={() => document.getElementById('fileInput').click()}
            >Upload your Car picture</button>
             
        {/* Display error */}
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default Body;
