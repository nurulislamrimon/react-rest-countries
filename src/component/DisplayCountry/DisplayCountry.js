import React from 'react';
import './DisplayCountry.css'

const DisplayCountry = props => {
    return (
        <div>
            <div className='country-container'>
                <h1>{props.name}</h1>
                <img src={props.flag} alt="" />
            </div>
        </div>
    )
}

export default DisplayCountry;