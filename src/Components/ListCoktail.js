import React from 'react'
import { useSelector } from 'react-redux'
import { CardCoktail } from './CardCoktail'

const ListCoktail = () => {
    const coktail = useSelector(state => state.coktail) 
  return (

    <div style={{display:'flex',flexWrap:'wrap', justifyContent:'center'}}>
        {
           
                       coktail.map((el,i)=><CardCoktail  coktail={el} key={i}/>)
        }
    </div>
  )
}

export default ListCoktail