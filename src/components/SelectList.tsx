import React from 'react';
import Select from 'react-select';
import { ICity } from '../context/types';

type SelectListProps = {
  onChange: any;
  cities: ICity[];
  id: number;
  lang: string;
};

const byLabel = (a: any, b: any) =>
  a.label > b.label ? 1 : b.label > a.label ? -1 : 0;

const SelectList = ({ onChange, cities, id, lang }: SelectListProps) => {
  const options = cities
    ? cities
        .map((e: ICity) => ({
          value: e.id,
          label: e.names[lang]
        }))
        .sort(byLabel)
    : [];

  const value = options.find((e: any) => e.value === id);

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
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default React.memo(SelectList);
