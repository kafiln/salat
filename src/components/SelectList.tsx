import React from 'react';
import Select from 'react-select';
import { ICity } from '../context/types';
import styled from 'styled-components';

type SelectListProps = {
  onChange: any;
  cities: ICity[];
  id: number;
  lang: string;
};

/* Change City Component  */

const StyledSelect = styled(Select)`
  width: 100%;
  padding: 0.8rem;
  border-radius: 2px;
`;

const Container = styled.div`
  width: 100%;
  color: black;
  margin: 2vh 0;
  text-align: center;
`;

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
    <Container>
      <StyledSelect
        styles={customStyles}
        options={options}
        menuPlacement={'top'}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default React.memo(SelectList);
