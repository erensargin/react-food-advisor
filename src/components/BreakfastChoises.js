import React from 'react'
import { useState } from 'react';

export default function BreakfastChoises() {
    const ing = ['123', '456', '7', '8'];
    const [checkedState, setCheckedState] = useState(
        new Array(4).fill(false)
    );
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);
    };

    return (
        <div>
            {ing.map((name, index) => {
                return (
                    <li key={index}>
                        <div className="toppings-list-item">
                            <div className="left-section">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={name}
                                    value={name}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                            </div>
                        </div>
                    </li>
                );
            })}
        </div>
    )
}