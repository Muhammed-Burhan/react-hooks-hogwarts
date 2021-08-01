import React, { useState } from "react";

function Card({ name, img, hog, specialty }) {
  const { greased, weight, "highest medal achieved": medal } = hog;
  console.log(medal);
  const [hide, setHide] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  if (hide) return null;
  return (
    <div className=" pigTile">
      <div className="image">
        <img className={"minPigTile"} src={img} alt="pig" />
      </div>
      <h3>{name}</h3>
      {showInfo ? (
        <div>
          <p>specialty : {specialty}</p>
          <p>{greased ? "Greased" : " Not Greased"}</p>
          <p>weight: {weight}</p>
          <p>{medal}</p>
        </div>
      ) : null}
      <button
        className="ui button"
        onClick={() => setShowInfo((prev) => !prev)}
      >
        {showInfo ? "Show Less" : "Show More"}
      </button>
      <button className="ui button" onClick={() => setHide(true)}>
        Hide Me
      </button>
    </div>
  );
}

export default Card;
