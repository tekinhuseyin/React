import React from "react";
import data from "../data.js";
import ImageSSS from "./styles/ImageSSS.jsx";
import KartSSS from "./styles/KartSSS.jsx";





const Card = () => {
  return (
    <div>
    {data.map((item)=>(
      <KartSSS>
      <div>
        <h2>{item.title}</h2>

        <p>{item.body}</p>
      </div>

      <ImageSSS src={`./images/${item.image}`} alt="" />

    )
    )
    }

     






    </div>
  );
};

export default Card;
