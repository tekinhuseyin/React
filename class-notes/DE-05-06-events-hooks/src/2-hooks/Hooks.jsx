import React, { useState } from 'react'

const Hooks = () => {

const[sayac,setSayac]=useState(0)

// let sayac=0

  const arttir=()=>{
    setSayac(sayac+1);
  }; 

  return (
    <div className="container">
      <h2>****************************************************************</h2>

      <h1>USESTATE</h1>
      <h2>COUNT:{sayac}</h2>

      <button className="btn btn-primary" onClick={arttir}>ARTTIR</button>
      <button className="btn btn-danger">AZALT</button>
      <button className="btn btn-warning">TEMIZLE</button>
    </div>
  );
}

export default Hooks
