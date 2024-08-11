import React, { useState, useEffect } from "react";


const CountDown = () => {
    
    const [inputValue, setInputValue] = useState("");
    const [countdown, setCountdown] = useState("");
    const [isCounting, setIsCounting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const handleChange = (event) => {
        setInputValue(event.target.value)};

    const StartCountdown = (event) => {
        event.preventDefault();
        const number = parseInt(inputValue);
        if(number > 0){
            setCountdown(number);
            setIsCounting(true)
        } else {
            alert("Please, enter a positive number")
        }
    };
    useEffect(() => {
        let timer;
        if (isCounting && countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);
        } else if (countdown === 0) {
            clearInterval(timer);
            alert("Time is OVER!");
        }

        return () => clearInterval(timer);
    }, [isCounting, countdown, isPaused]);

    const PausedCountdown = () => {
        setIsPaused(true)
    };

    const ResumeCountdown = () => {
        setIsPaused(false)
    };

    const ResetCountdown = () => {
        setIsCounting(false);
        setIsPaused(false);
        setCountdown(null);
        setInputValue('');
    };


    const formattedCountdown = countdown.toString().padStart(6, '0');
    const digits = formattedCountdown.split('').map((digit, index) => (
        <div key={index} className="digit2">
            {digit}
        </div>
    ));

    return (
        <div className="countdown">
            <div className="form">
                <label className="countdowntext">Set your countdown number</label>
                <form onSubmit={StartCountdown}>
                    <input value={inputValue} onChange={handleChange} type="number"></input>
                    <button className="startButton" type="submit">Start</button>
                    <button className="pauseButton" type="button" onClick={PausedCountdown} disabled={!isCounting || isPaused}>Pause</button>
                    <button className="contiueButton" type="button" onClick={ResumeCountdown} disabled={!isCounting || !isPaused}>Continue</button>
                    <button className="resetButton" type="button" onClick={ResetCountdown}>Reset</button>
                        <div className="iconcountdown"><svg xmlns="http://www.w3.org/2000/svg" width="100" fill="currentColor" className="bi bi-clock-fill" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/></svg>
                        </div>
                </form>
            </div>
            <div className="counter2">{digits}</div>
        </div>
    );
};

export default CountDown