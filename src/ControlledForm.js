import React, { useState } from "react";

function ControlledForm() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Input value: ' + inputValue);
    };
    return (
        <div>
            <h2>ControlledForm</h2>
            <form onSubmit={handleSubmit}>
                <input
                type ="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter text"
                />
                <button type ="submit">Submit</button>
            </form>
        </div>
    );

}

export default ControlledForm;