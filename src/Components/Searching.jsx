import { useState, useEffect } from "react"
import axios from 'axios'

const Searching = ({setLocationId, locationId, getApiData})=> {

  const [newId, setNewId] = useState ('')
  
  

  
  const setNewLocationId =()=>{
  setLocationId(newId)
  getApiData()
  setNewId('')
  }

 /*** Validate that  input text is not numbers  ***/
  const validate = (e)=>{
    let numbers = '0123456789'
    let currentletter = e
    let fullstring = ``
    for(let num in numbers){
      if( num === currentletter[currentletter.length -1] && currentletter.length > 1){
        fullstring += e
      }
      if(num === currentletter){
        fullstring = e
      }
      setNewId(fullstring)
    }
    /*** Validate that  input text is not numbers  ***/
  }

  
  
    return(
      <>
        <article className="search--button">
          <input className="newId__input" type="text" value={newId}
            maxLength={3}
           onChange={ e =>
            validate(e.target.value)
            } onKeyDown={e => {e.key === 'Enter' && setNewLocationId()}}
             placeholder='Type a location ID between 1-126'/>

          <button className="newId__button" onClick={setNewLocationId} >Search</button>
        </article>
     </>
    )
  
  
}
export default Searching

