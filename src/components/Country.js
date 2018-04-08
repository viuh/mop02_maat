import React from 'react'

const Country = ({country}) => {
    //console.log("Cou",country.name,";", country.flag)
    let altname = country.name + " flag"
    return (
      <div>
        <h2>{country.name} {country.altSpellings[1]}</h2>
        capital: {country.capital}
        <br/><br/>
        population: {country.population}
        <br/><br/>
        <img src={country.flag} height="240px" alt={altname}/>
        <br/>
        </div>
      )
  
  }
  

export default Country
