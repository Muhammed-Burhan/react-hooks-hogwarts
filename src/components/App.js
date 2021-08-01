import React, { useState } from "react";
//Component Import
import Nav from "./Nav";
import CardFilter from "./CardFilter";
import CardList from "./CardList";
//Data Import
import hogs from "../porkers_data";

function App() {
  //States
  const [sort, setSort] = useState("name");
  const [greased, setGreased] = useState(false);
  //Filters
  const display = hogs
    .filter((hog) => {
      return greased ? hog.greased : true;
    })
    .sort((hog1, hog2) => {
      return sort === "weight"
        ? hog2.weight - hog1.weight
        : hog1.name.localeCompare(hog2.name);
    });
  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        {" "}
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <CardFilter
          sorthBy={sort}
          sortChangeHandler={setSort}
          isGreased={greased}
          greasedChangeHandler={setGreased}
        />
      </div>
      <div className="sixteen wide column centered">
        <CardList displayHogs={display} />
      </div>
    </div>
  );
}

export default App;
