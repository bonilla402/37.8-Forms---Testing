﻿import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from './Box';
import './BoxList.css';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    // Function to add a new box
    const addBox = (color, width, height) => {
        const newBox = { id: uuidv4(), color, width, height };
        setBoxes([...boxes, newBox]);
    };

    // Function to remove a box by id
    const removeBox = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id));
    };

    return (
        <div className="boxlist-container">
            <h1>Box List</h1>
            <div className="button-container">
                <button onClick={() => addBox('red', 100, 100)}>Add Red Box</button>
                <button onClick={() => addBox('blue', 150, 150)}>Add Blue Box</button>
                <button onClick={() => addBox('green', 200, 200)}>Add Green Box</button>
            </div>
            <div className="boxes-container">
                {boxes.map((box) => (
                    <Box
                        key={box.id}
                        id={box.id}
                        color={box.color}
                        width={box.width}
                        height={box.height}
                        removeBox={removeBox}
                    />
                ))}
            </div>
        </div>
    );
};

export default BoxList;
