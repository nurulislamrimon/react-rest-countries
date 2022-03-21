import React, { useEffect, useState } from 'react';
import DisplayCountry from '../DisplayCountry/DisplayCountry';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            {countries.map(country => <DisplayCountry name={country.name.common} flag={country.flags.png}></DisplayCountry>)}
        </div>
    );
};
export default Countries;