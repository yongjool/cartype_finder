import React from 'react';
import styles from './ResultBox.module.css';

const ResultBox = ({predictions}) => {

    console.log(predictions);

    const highestProbabilityTag = predictions
    ? predictions.reduce((prev, current) =>
        prev.probability > current.probability ? prev : current
      )
    : null;

    const tagName = highestProbabilityTag ? highestProbabilityTag.tagName : '-';

    let price = '-';

    switch(tagName) {
        case 'sedan':
            price = '100'; // Assign a number for "sedan"
          break;
        case 'suv':
            price = '200'; // Assign a number for "suv"
          break;
        case 'truck':
            price = '300'; // Assign a number for "truck"
          break;
        default:
            price = '-'; // Default value if no valid tag
          break;
      }

    return (

        <div className={styles.resultBox}>
        <div className={styles.leftText}>Your Estimated<br></br>Payment</div>
        <div className={styles.centerText}>{tagName.toUpperCase()}</div>
        <div className={styles.rightBox}>
            <p className={styles.rightText}>${price} per month</p>
        </div>
        </div>
    );
};

export default ResultBox;
