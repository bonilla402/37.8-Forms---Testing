import React, { useState } from 'react';
import './NewBoxForm.css';

const INITIAL_STATE = { color: '#d3d3d3', width: 50, height: 50 };

const NewBoxForm = ({ addBox }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.width && formData.height && formData.color) {
            addBox(formData.color, parseInt(formData.width), parseInt(formData.height));
            setFormData(INITIAL_STATE);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="new-box-form">
            <div>
                <label htmlFor="color">Color: </label>
                <input
                    type="color"
                    id="color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="width">Width (px): </label>
                <input
                    type="number"
                    id="width"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="height">Height (px): </label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Box</button>
        </form>
    );
};

export default NewBoxForm;
