import { useState, useEffect } from "react"
import axios from 'axios'

const Searching = ({setLocationId, locationId, getApiData})=> {

  const [newId, setNewId] = useState ('')
  
  

  
  const setNewLocationId =()=>{
  setLocationId(newId)
  getApiData()
  }

 



  
    return(
      <>
        <article className="search--button">
          <input className="newId__input" type="text" value={newId} onChange={event => setNewId(event.target.value)} placeholder='Type a location ID between 1-126'/>
          <button className="newId__button" onClick={setNewLocationId}>Search</button>
        </article>
     </>
    )
  
  
}
export default Searching

