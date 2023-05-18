import React from 'react'
import Msg from './Msg'

const Person = (props) => {
    // console.log(props);
    const {name, img, tel} = props
  return (
    <div>
    <h2>{name}</h2>
    
{/* Msg componentinde persondaki verileri kullanmak icin tekrar tanimladik */}
      <Msg isim={name} telefon={tel}/>

      <img src={img} alt="" />
    </div>
  )
}

export default Person
