import React, { useEffect, useState } from 'react';
import DisplayCountry from '../DisplayCountry/DisplayCountry';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2>Total countries: {countries.length}</h2>
            <div className='countries-container'>
                {countries.map(country => <DisplayCountry
                    country={country}
                    key={country.cca3}
                ></DisplayCountry>)}
            </div>
        </div>
    );
};
export default Countries;