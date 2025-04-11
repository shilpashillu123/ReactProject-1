import React, { useState } from "react";

function MultipleInputsForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}`);
        setFormData({ name: '', email: ''});
    };
    return (
        <div>
            <h2>Multiple input Field</h2>
            <form onSubmit={handleSubmit}>
                <input
                type ="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                />
                <input
                 type="email"
                 name="email"
                 value={formData.email}
                 onChange={handleInputChange}
                 placeholder="Enter your email"
                />
                <button type ="submit">Submit</button>
            </form>

        </div>

    );

}

export default MultipleInputsForm;


    
