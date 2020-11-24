import React from 'react';
import './searches.css';


export const Searches = ({ updateSearchField, setContinent, dark }) => {
  

  const inputHandler = (e) => {
    // onChange={e => ({ searchField: e.target.value})
    console.log(e.target.value);
    updateSearchField(e.target.value)
  }

  const continentHandler = (e) => {
    setContinent(e.target.value)

    if(e.target.value === 'all'){
      setContinent('')
    }
  }
  return(
    <div className={dark ? 'search-dark searchBox' : 'searchBox'}>
       <div className="searchInput">
       <input 
       className='input'
      type="text" 
      name="text" 
      placeholder='Search for a country...' 
      // console.log(this.state);
      onChange={inputHandler}
       />
       <i className="fas fa-search"></i>
       </div>
       <div className="select">
       <select onChange={continentHandler} name="continent" className='continent'>
         <option value='' disabled selected hidden>Filter by Region</option>
         <option value="africa">Africa</option>
         <option value='americas'>Americas</option>
         <option value="asia">Asia</option>
         <option value="europe">Europe</option>
         <option value="oceania">Oceania</option>
         <option value="all">All</option>
       </select>
       </div>
    </div>
  )
}

