import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedSeconds = seconds.toString().padStart(6, '0');

    return (
        <div className="bigCounter">
            <div className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="170" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                </svg>
            </div>
            <div className="counter">
                {formattedSeconds.split('').map((digit, index) => (
                    <div key={index} className="digit">
                        {digit}
                    </div>
                ))}
            </div>
            <p>Seconds counted since last re-load</p>
        </div>
    );
};

export default SecondsCounter;
