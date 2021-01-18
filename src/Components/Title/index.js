import React from 'react';
import './index.css';

function Title({ text }) {
    return (
        <div className="title">
           <h1>{text}</h1> 
        </div>
    );
};

export default Title;
