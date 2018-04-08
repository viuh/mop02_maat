import React from 'react'

const SearchForm = ({fu1,fu2}) => {

    //console.log("sf", fu1)
    return (
     <form>
     <div>
       find countries <input value={fu1} 
         onChange={fu2}/> 
     </div>
     </form>
   ) 
 }

 export default SearchForm