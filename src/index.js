import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import SearchForm from './components/SearchForm'
import Country from './components/Country'


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          countries: []   ,
          filter: '',
          newFilter: '',
        } 
      ;


    }
  

    componentDidMount() {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          //console.log('data got')
          this.setState({ countries: response.data })
        })
    }


    handleClick = (event,text) => {
      //https://stackoverflow.com/a/47130799/364931
      //console.log("AAA",text);

      this.setState({ 
        filter: text })
    }
    

    handleFilter = (event) => {

      this.setState({ newFilter:  event.target.value ,
        filter: event.target.value  })
        //console.log ("A2: ", this.state.filter, "B2: ", this.state.newFilter)

      }    


    listAll = () => { 

      let list = this.state.countries
      let maxNum = 10
      let cou = ''

      let filt = this.state.filter
      //console.log("filter:",filt)
      
      if (filt != null) {
        cou = filt.charAt(0).toUpperCase() + filt.slice(1);
        list = this.state.countries.filter(person=>person.name.startsWith(cou)===true)
      }

      if (list.length === 1) {
        return (
          list.map(country => 
          <Country key={country.name} country={country}  />
           )  
          )          
      }

      if ((list.length > 0) && (list.length <= maxNum)) {
        return (
          list.map(country =>
              <div key={country.name}  
              onClick={(e) => this.handleClick (e,country.name)} data={country.name}>{country.name}</div>
        ))
      } else {
        return ( <div>too many matches, specify another filter</div> )
      }
    }

    render() {

      return (
        <div>
 
          <SearchForm fu1={this.state.newFilter} 
            fu2={this.handleFilter}/>

          <div>    
            {this.listAll()}
          </div>
        </div>
      )
    }
  }


ReactDOM.render(
  <App />,
  document.getElementById('root')
)



export default App
