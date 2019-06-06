import React from 'react';

const SelectList = ({ values, onChange, value }) => {
  return (
    <div className="select">
      <select value={value} onChange={onChange}>
        {values.map(c => {
          return (
            <option value={c.id} key={c.id}>
              {c.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectList;
