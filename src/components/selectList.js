import React from 'react';
import Select from 'react-select';

const SelectList = ({ values, onChange, value }) => {
  const options = values.map(e => ({
    value: e.id,
    label: e.name
  }));

  const customStyles = {
    singleValue: (provided) => {
      const padding = '20px 0';
      return { ...provided, padding};
    }
  };

  return (
    <div className="select">
      <Select
        styles={customStyles}
        options={options}
        menuPlacement={'top'}
        defaultValue={options.find(e => e.value === value)}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectList;
