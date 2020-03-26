import React from 'react';
import Select from 'react-select';

type SelectListProps = { onChange: any; cities: any[]; id: Number };
const SelectList = ({ onChange, cities, id }: SelectListProps) => {
  const options = cities
    ? cities.map((e: any) => ({
        value: e.id,
        label: e.name
      }))
    : [];

  const customStyles = {
    singleValue: (provided: any) => {
      const padding = '20px 10px';
      const textAlign = 'center';
      return { ...provided, padding, width: '100%', textAlign };
    }
  };

  return (
    <div className="select">
      <Select
        styles={customStyles}
        options={options}
        menuPlacement={'top'}
        value={options.find((e: any) => e.value === id)}
        onChange={onChange}
      />
    </div>
  );
};

export default React.memo(SelectList);
