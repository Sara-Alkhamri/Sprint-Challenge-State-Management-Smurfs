import React from 'react';

const SumrfCard = props => {
    const {name, age, height} = props.item;

    return (
        <div>
            <h1>Name: {name}</h1>
            <h3>Age: {age}</h3>
            <h3>Height: {height}</h3>
        </div>
    )
}

export default SumrfCard;