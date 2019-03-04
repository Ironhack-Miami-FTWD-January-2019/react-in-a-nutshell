import React from 'react';

const card = ({ title, director }) => {
    let color = "#" + ((1 << 24) * Math.random() | 0).toString(16)

    return (
        <div>
            <h2 style={{color:color}}>{title}!!!</h2>
            <p  style={{color}}>Director: {director}</p>
        </div>
    )
};

export default card;