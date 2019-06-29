import React from 'react';
import Select from 'react-select';

const SelectList = ({ values, onChange, value }) => {
  const options = values.map(e => ({
    value: e.id,
    label: e.name
  }));

  const customStyles = {
    // singleValue: (provided, state) => {
    //   console.log(state);
    //   return {
    //     ...provided,
    //     padding: '0 auto',
    //     color: state.isSelected ? 'blue' : 'grey',
    //     textAlign: 'center'
    //   };
    // },
    // dropdownIndicator: (provided, state) => {
    //   return {
    //     ...provided
    //   };
    // },
    // valueContainer: (provided, state) => {
    //   return {
    //     ...provided,
    //     // backgroundColor: 'red',
    //     width: 'auto'
    //   };
    // }
  };

  return (
    <div className="select">
      <Select
        options={options}
        menuPlacement={'top'}
        styles={customStyles}
        // isClearable={true}
        defaultValue={options.find(e => e.value === value)}
        onChange={onChange}
      />
    </div>
  );
};

export default SelectList;
