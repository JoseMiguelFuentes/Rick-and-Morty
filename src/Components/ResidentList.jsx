import axios from "axios"
import { useState } from "react"
import ResidentsInfo from "./ResidentsInfo"




const ResidentList = ({location})=> {


  const [arrayPage, setArrayPage] = useState (0)


  const {residents} = location
  

  
  



  return (
    <>
      {residents?.map(character =>
        <div key={character}> 
          <ResidentsInfo character={character}/>
          </div>
        )}
    </>
  )
}
export default ResidentList


