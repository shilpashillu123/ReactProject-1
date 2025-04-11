import React, { useRef } from "react";

function Uncontrolled() {
    const inputRef = useRef();
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Input value: ' + inputRef.current.value);
    };
    return (
        <div>
            <h2>UnControlled Form</h2>
            <form onSubmit={handleSubmit}>
                <input
                type ="text" ref = {inputRef}
                placeholder="Enter text"
                />
                <button type ="submit">Submit</button>
            </form>
        </div>
    );

}

export default Uncontrolled;