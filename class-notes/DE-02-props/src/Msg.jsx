import React from 'react'

// personda Msg nin icinde tanimladigimiz verileri (isim ve telefon) suslu parantez ile burada cagirdik ve kullandik
const Msg = ({isim, telefon}) => {
  return (
    <div>
      <h1>Merhaba Ben {isim}</h1>
      <h4>benim telefon numaram {telefon}</h4>
    </div>
  )
}

export default Msg
