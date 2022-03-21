import React from 'react';
import './DisplayCountry.css'

const DisplayCountry = props => {
    const { name, flags, region, area } = props.country;
    return (
        <div className='country-container'>
            <h1>{name.common}</h1>
            <h5>Region: {region}</h5>
            <img src={flags.png} alt="" />
            <h5>Area: {area}</h5>
        </div>
    )
}

export default DisplayCountry;