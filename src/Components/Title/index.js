import React from 'react';
import './index.css';

function Title({ titleText, subtitleText, explaination }) {
    return (
        <div className="title">
           <h1>{titleText}</h1>
           <h2>{subtitleText}</h2>
           <p>{explaination}</p>
        </div>
    );
};

export default Title;
