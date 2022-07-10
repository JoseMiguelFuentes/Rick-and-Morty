

const StatusColor = ({individual})=>{

  if(individual.status === 'Dead'){
    return(
      <p className="circle" style={{background: 'red'}}></p>
    )
  }else if(individual.status === 'Alive'){
    return(
      <p className="circle" style={{background: 'green'}}></p>
    )
  }else{
    return(
      <p className="circle" style={{background: 'gray'}}></p>
    )
  }

  
}
export default StatusColor