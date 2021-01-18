import React from 'react';
import './index.css';

import Button from '../Button/'

function MovieItem({ index, title, year, buttonText, action }) {
    

    return (
        <div className="movieItem">
            <div className="info">
                <h4>{title}</h4>
                <p>({year})</p>
            </div>
            <Button 
                index={index}
                buttonText={buttonText}
                action={action}
            />
        </div>
    )
}

export default MovieItem
