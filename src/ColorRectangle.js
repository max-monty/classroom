import React from 'react';

function ColorRectangle({ redPercent, greenPercent, yellowPercent, increaseRed, increaseGreen, increaseYellow }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', height: '50px', width: '200px' }}>
                <div style={{ backgroundColor: 'red', width: `${redPercent}%` }} />
                <div style={{ backgroundColor: 'green', width: `${greenPercent}%` }} />
                <div style={{ backgroundColor: 'yellow', width: `${yellowPercent}%` }} />
            </div>
            <div>
                <button onClick={increaseRed}>Increase Red</button>
                <button onClick={increaseGreen}>Increase Green</button>
                <button onClick={increaseYellow}>Increase Yellow</button>
            </div>
        </div>
    );
}

export default ColorRectangle;