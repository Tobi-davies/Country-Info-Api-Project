import React from 'react';
import {Link} from 'react-router-dom'

import './country-card.css'

export const Card = ({ country, dark }) => (
  <div className={dark ? 'card-dark card' : 'card'}>
    <Link to={`/page/${country.name}`}>
        <div className="card-img">
          <img src={country.flag} alt="flag"/>
        </div>
    </Link>    
        <div className="card-text">
            <h4>{country.name}</h4>
            <p className='info'><span className='bold'>Population:</span>{country.population.toLocaleString()}</p>
            <p className='info'><span className='bold'>Region:</span>{country.region}</p>
            <p className='info'><span className='bold'>capital:</span>{country.capital}</p>
        </div>
    
  </div>
)