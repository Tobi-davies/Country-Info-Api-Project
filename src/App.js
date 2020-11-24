import React, {useState, useEffect} from 'react';
import './App.css';
import { CardList } from './components/country-cardlist/country-cardlist';
import { Searches } from './components/search-box/searches';
import Header from './components/header/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SinglePage from './components/single-Page/singlePage';

 const App = () => {
     
  const [countries, setCountries] = useState([])
  const [searchField, updateSearchField] = useState('')
  const [continent, setContinent] = useState('')
  // const [filteredRegion, updatedFilteredRegion] = useState([])
  const [dark, setDark] = useState(false)
    

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => setCountries(data));
    console.log(countries);
    
  })

   
  const newRegion = countries.filter(cont => 
    {
      if(continent === 'All') {
        console.log('happy');
        
      }
      return cont.region.toLowerCase().includes(continent.toLowerCase())
    })
  const filteredCountries = newRegion.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))


  

  return(
    <Router>
    <div>
      <Header dark={dark} setDark={setDark}/>
       <Route exact path='/'>
          <div className={dark ? "dark-mode App": "App"}>
              <Searches dark={dark} updateSearchField={updateSearchField} setContinent={setContinent}/>
              <CardList dark={dark} update={filteredCountries} />
          </div>
       </Route>
       <Route path='/page/:id' dark={dark} render={(props) => <SinglePage {...props} dark={dark} />}/>
    </div>
    </Router>
  )
  }

  export default App;



