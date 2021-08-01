import React from "react";
import Card from "./Card";
function CardList({ displayHogs }) {
  const cards = displayHogs.map((card) => {
    return (
      <Card
        key={card.name}
        name={card.name}
        img={card.image}
        hog={card}
        specialty={card.specialty}
        weight={card.weight}
      />
    );
  });
  return <div>{cards}</div>;
}

export default CardList;
