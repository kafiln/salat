import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../context/AppContext';

const SelectList = ({ onChange }) => {
  const { cities, id } = useContext(AppContext);
  const options = cities.map(e => ({
    value: e.id,
    label: e.name
  }));

  const customStyles = {
    singleValue: provided => {
      const padding = '20px 0';
      return { ...provided, padding };
    }
  };

  return (
    <div className="select">
      <Select
        styles={customStyles}
        options={options}
        menuPlacement={'top'}
        value={options.find(e => e.value === id)}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectList;
