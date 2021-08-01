import React from "react";

function CardFilter({
  sorthBy,
  sortChangeHandler,
  isGreased,
  greasedChangeHandler,
}) {
  const selectHandler = (e) => {
    sortChangeHandler(e.target.value);
  };
  const checkHandler = (e) => {
    greasedChangeHandler((prev) => !prev);
  };
  return (
    <div className="filterWrapper">
      <div className="ui menu">
        <div className="ui item">
          <label>Sort by </label>
        </div>
        <select
          className="ui selection dropdown"
          value={sorthBy}
          onChange={selectHandler}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <div className="ui item">
        <label>Greased Pigs Only?</label>
      </div>
      <div className="ui item">
        <input
          className="ui toggle checkbox"
          type="checkbox"
          name="greased"
          value={isGreased}
          onChange={checkHandler}
        />
      </div>
    </div>
  );
}

export default CardFilter;
