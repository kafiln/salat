import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../context/AppContext';

type SelectListProps = { onChange: any };
export default ({ onChange }: SelectListProps) => {
  const { cities, id, lang } = useContext(AppContext);
  const options = cities
    ? cities.map((e: any) => ({
        value: e.id,
        label: e.name
      }))
    : [];

  const customStyles = {
    singleValue: (provided: any) => {
      const padding = '20px 10px';
      const textAlign = lang === 'ar' ? 'right' : 'left';
      return { ...provided, padding, width: '100%', textAlign };
    },
    menu: (provided: any) => {
      const textAlign = lang === 'ar' ? 'right' : 'left';
      return { ...provided, textAlign };
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
