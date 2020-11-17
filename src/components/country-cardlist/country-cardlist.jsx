import React from 'react';
import './country-cardlist.css'
import { Card } from '../country-card/country-card';

export const CardList = ({update, dark}) => {
  
  return(
    <div className="country-list">
      {update.map((country, index) => (
         <Card dark={dark} key={index} country={country} />
      ))}
    </div>
  )
}