import React from 'react';
import './Box.css';

const Box = ({ id, color, width, height, removeBox }) => {
    return (
        <div className="box-container">
            <div
                className="box"
                style={{
                    backgroundColor: color,
                    width: `${width}px`,
                    height: `${height}px`,
                }}
            />
            <button className="remove-button" onClick={() => removeBox(id)}>
                Remove
            </button>
        </div>
    );
};

export default Box;
