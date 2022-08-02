import axios from "axios"
import { useState, useEffect } from "react"
import StatusColor from "./StatusColor"


const ResidentsInfo = ({character}) =>{
  const [individual, setIndividual] = useState ({})
  useEffect(()=>{
    axios.get(character)
    .then(res => setIndividual (res.data))
  },[])

  return (
    <div className="ResidentsItem" >
      <img className="individual" src={individual.image} alt="character" />
      <div className="status">
        <StatusColor individual={individual}/>
        {individual.status}</div>
      <div className="character--info">
        <h3 className="big--font" >{individual?.name}</h3> <hr style={{color: "#0b3036"}}/>
        <div>
          <p  className="small--font">Race</p>
          <p className="med--font" >{individual.species}</p>
        </div>
        <div>
          <p className="small--font">Origin</p>
          <p className="med--font">{individual.origin?.name}</p>
        </div>
        <div>
          <p className="small--font"> Episodes</p>
          <p className="med--font"> {individual.episode?.length}</p>
        </div>
        
      </div>
    </div>
  )
}
export default ResidentsInfo