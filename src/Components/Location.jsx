import { useState, useEffect } from "react"
import axios from 'axios'
import ResidentsList from "./ResidentList"
import Searching from "./Searching"

let firstId = Math.floor( (Math.random( ) * 126) + 1 )


const Location = () =>{

  const [location, setLocation] = useState ({})
  const [locationId, setLocationId] = useState ( firstId )
  
  
  let urlId = `https://rickandmortyapi.com/api/location/${locationId}`
  
  

   function getApiData () {
      axios.get(urlId)  
       .then(res => setLocation(res.data))
  }
  console.log(location)

  useEffect(()=>{
    getApiData ()
  },[locationId])


function changeType( ) {
  if (searchType  === 'id'){
    setSearchType('name')
  } else{
    setSearchType('id')
  }  
}




  return(
    <>
      
      
      <Searching  locationId={locationId} setLocationId={setLocationId}  getApiData={getApiData} />
      {/* <button onClick={changeType}>Search by name</button> */}

      <article className="location">
      <h1 className="big--font">{location.name}</h1>
      <div className="Location__data med--font">
        <p>Type: {location.type}</p>
        <p>Dimesion: {location.dimension}</p>
        <p>Population: {location.residents?.length}</p>
        
      </div>
      </article>
      <div className="container">
        <ResidentsList location={location}/>
      </div>
    </>
  )
}
export default Location
