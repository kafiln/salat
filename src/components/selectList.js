import React from "react";
// import { Typeahead } from "react-typeahead";

const SelectList = ({ values, onChange }) => {
  return (
    <div className="select">
      <select onChange={onChange}>
        {values.map(c => {
          return (
            <option value={c.id} key={c.id}>
              {c.name}
            </option>
          );
        })}
      </select>

      {/* <Typeahead options={values} /> */}
    </div>
  );
};

export default SelectList;
