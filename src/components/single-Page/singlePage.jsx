import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './singlePage.css';
import countries from "i18n-iso-countries";


const SinglePage = ({ match, dark }) => {
  const [items, setItem] = useState([])

  countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

  useEffect(() => {
    getCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const getCountries = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
    .then(response => response.json())
    .then(data => setItem(data))
  }
  return(
    <div className={dark ? 'change-mode fullpage' : 'fullpage'}>
        <div className='single'>
          <Link to='/'>
            <button className="btn">
            <i className="fas fa-arrow-left"></i>
              <span>Back</span>
            </button>
          </Link>
          {items.map(item => (
            <div className="country-grid">
              <div className="country-flag">
                <img src={item.flag} alt="flag"/>
              </div>
              <div className="country-info">
                <h2>{item.name}</h2>
                <div className="info-flex">
                  <div className="info-big">
                    <p>Native Name: <span>{item.nativeName}</span></p>
                    <p>Population: <span>{item.population.toLocaleString()}</span></p>
                    <p>Region: <span>{item.region}</span></p>
                    <p>Sub Region: <span>{item.subregion}</span></p>
                    <p>Capital: <span>{item.capital}</span></p>
                  </div>
                  <div className="info-small">
                    <p>Top Level Domain: <span>{item.topLevelDomain}</span></p>
                    <p>Currencies: <span>
                      {item.currencies.map(curr => {
                      return curr.name
                    }).join(', ')}
                      </span></p>
                    <p>Languages: <span>
                      {item.languages.map(lang => {
                      return lang.name
                    }).join(', ')}
                    </span></p> 
                  </div>
                </div>
                <div className="fullname">
                  <p className='border-title'>Border Countries: </p> <span className="fullname-flex">
                    {item.borders.map(border => {
                      return <span className='fullname-country'> {countries.getName(border, "en")}</span>
                    })}
                    </span>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
  )
}



export default SinglePage;