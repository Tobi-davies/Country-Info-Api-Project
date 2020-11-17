import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/country-cardlist/country-cardlist';
import { Searches } from './components/search-box/searches';
import Header from './components/header/header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SinglePage from './components/single-Page/singlePage';

 const App = () => {
     
  const [countries, setCountries] = useState([])
  const [searchField, updateSearchField] = useState('')
  const [continent, setContinent] = useState('All')
  const [filteredRegion, updatedFilteredRegion] = useState([])
  const [dark, setDark] = useState(false)
    

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data => setCountries(data));
    // console.log(countries);
    
  })

  // useEffect(() => {
  //   // console.log('yayy');
  //   // updatedFilteredRegion(countries.filter(country => country.region.toLowerCase() === 'africa'))
  //   filterHandler()
  // }, [continent, countries])
   
  const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))

  // const filterHandler = () => {
  //         switch (continent) {
  //           case 'africa':
  //             updatedFilteredRegion(countries.filter(country => country.region.toLowerCase() === 'africa'))
  //             break;
    
  //           case 'americas':
  //             updatedFilteredRegion(countries.filter(country => country.region.toLowerCase() === 'americas'))
  //             break;
    
  //           case 'asia':
  //             updatedFilteredRegion(countries.filter(country => country.region.toLowerCase() === 'asia'))
  //             break;
  //           case 'europe':
  //             updatedFilteredRegion(countries.filter(country => country.region.toLowerCase() === 'europe'))
  //             break;
  //           case 'oceania':
  //             updatedFilteredRegion(countries.filter(country => country.region.toLowerCase() === 'oceania'))
  //             break;
          
  //           default:
  //             updatedFilteredRegion(countries)
  //             break;
  //         }
  // }

  // console.log(updatedFilteredRegion.name);
  

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

// class App extends Component {
//   state = { 
//     countries: [],
//     searchField: '',
//     continent: 'All',
//     filteredContinent: []
//    }

//   componentDidMount() {
//         fetch('https://restcountries.eu/rest/v2/all')
//         .then(response => response.json())
//         .then(data => this.setState({ countries: data}));

//       }
  

//   render() { 
   
//     const { countries, searchField, continent } = this.state;
    
//     const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchField.toLowerCase()))

//     const continentHandler = (e) => {
//       this.setState({continent: e.target.value})
//     }
//     const filterHandler = () => {
//       switch (continent) {
//         case 'africa':
//           this.setState({filteredContinent: countries.filter(country => country.region.toLowerCase() === 'africa')})
//           break;

//         case 'americas':
//           this.setState({filteredContinent: countries.filter(country => country.region.toLowerCase() === 'americas')})
//           break;

//         case 'asia':
//           this.setState({filteredContinent: countries.filter(country => country.region.toLowerCase() === 'asia')})
//           break;
      
//         default:
//           this.setState({filteredContinent: countries})
//           break;
//       }
//     }


//     return ( 
//       <div className='App'>
//         <div>
//             <input 
//             type="text" 
//             name="text" 
//             placeholder='Search for a country...' 
//             // console.log(this.state);
//             onChange={e => this.setState({searchField: e.target.value})}
//             />
//           <div className="select">
//             <select onChange={continentHandler} name="continent" className='continent'>
//               <option>Filter by Region</option>
//               <option value="africa">Africa</option>
//               <option value='americas'>Americas</option>
//               <option value="asia">Asia</option>
//               <option value="europe">Europe</option>
//               <option value="oceania">Oceania</option>
//               <option value="All">All</option>
//             </select>
//           </div>
//         </div>
//         {/* <searchBox searchField={this.state.searchField}/> */}
//         {/* <Searches searchField={this.state.searchField}/> */}
//         <CardList countries={filteredCountries} />
//       </div>
//      );
//   }
// }
 
// export default App;

