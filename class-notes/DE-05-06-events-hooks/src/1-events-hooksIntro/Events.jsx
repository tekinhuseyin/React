import React from 'react'
//! react alanında parametreli fonksiyon çağıracaksak, fonksiyonun adının önüne ()=> işaretini koymalıyız, yoksa fonksiyonu event ı beklemeden çalıştırıyor


const Events = () => {
    //! javascript alani
    let baslik="MERHABA";
    let count=0

    const arttir=()=>{
        count=count+1
        document.querySelector("span").textContent=count
    }

    const azalt = () => {
      count = count - 1;
      document.querySelector("span").textContent = count;
    };

    const butonBaslik = (a) => {
      document.querySelector(".btn-info").textContent = a;
    };


  return (
    //! react (jsx) alani

    <div className="container text-center mt-4">
      <h1>INFO: {baslik}</h1>

      <h2>
        COUNT: <span>{count}</span>
      </h2>

      <button className="btn btn-primary" onClick={arttir}>
        ARTTIR
      </button>

      <button className="btn btn-danger" onClick={azalt}>
        AZALT
      </button>

      <button
        className="btn btn-info"
        onClick={() => butonBaslik(new Date().getFullYear())}
      >
        TEMIZLE
      </button>

      <button
        className="btn btn-warning"
        onClick={() => alert("buton tiklandi")}
      >
        TIKLANDI
      </button>

    </div>
  );
}

export default Events
