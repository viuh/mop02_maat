import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import Person from './components/Person'
import SearchForm from './components/SearchForm'
import Header from './components/Header'


const Country = ({name,flag}) => {
  console.log("PEr",name,";", flag)
  let altname = name + " flag"
  return (
      <tr><td>{name}</td>
      <td><img src={flag} alt={altname}/></td>
      </tr>
      //<tr><td>{phone}</td></tr>
    )

}


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          countries: []   ,
          filter: '',
          newFilter22: '',
        }
      ;

    }
  

    componentDidMount() {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          console.log('data got')
          this.setState({ countries: response.data })
        })
    }


    handleFilterChange = (event) => {
      console.log("hfc", event.target.value)
      this.setState({ filter: event.target.value })
    }


    listAll = () => { 
      console.log("LA:",this.state.countries[0])
      console.log("Filter:",this.state.filter)
      let list = this.state.countries
      let maxlimit = 10


      list = this.state.countries.filter(country=>country.name.startsWith(this.state.filter)===true)
      
      if (list.length> maxlimit && list.length>0) {
        return "too many matches, specify another filter"
      } else {
      return (
        list.map(country =>
        <Country key={country.name} name={country.name} flag={country.flag}/>
        )
      ) 
      }
    }

    addFilter = (event) => {
      event.preventDefault()
      console.log('jotain')
    }


    render() {

      return (
        <div>
          <form>
          find countries: <input value={this.state.newFilter}
          onChange={this.state.handleFilterChange}/> <br/>
          </form>
          
          <table><tbody>
            {this.listAll()}
          </tbody>
          </table>
          </div>

      )
    }
  }


ReactDOM.render(
  <App />,
  document.getElementById('root')
)



export default App
