import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

const Box = ({ id, color = '#d3d3d3', width = 50, height = 50, removeBox }) => {
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
            {removeBox && (
                <button className="remove-button" onClick={() => removeBox(id)}>
                    Remove
                </button>
            )}
        </div>
    );
};

Box.propTypes = {
    id: PropTypes.string,
    color: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    removeBox: PropTypes.func,
};

export default Box;
