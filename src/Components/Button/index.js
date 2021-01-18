import React from 'react';
import './index.css';

function Button({ searchClass, index, action, buttonText }) {
    return (
        <div>
            <button className={searchClass} index={index} onClick={action} >{buttonText}</button>
        </div>
    );
};

export default Button;
