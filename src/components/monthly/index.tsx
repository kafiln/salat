import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import usePrayers from '../../hooks/usePrayers';
import { Spinner } from '../../common/spinner/styles';
import { Table, Tbody, Tr, Td, Th } from './styles';

const NAMES = require('../../data/prayers.json');

const NAMES_FR = Object.keys(NAMES).map(e => e);

const Monthly = () => {
  const { lang, id } = useContext(AppContext);
  const today = new Date().getDate();

  let prayers = usePrayers(id);

  const table = (
    <Table>
      <thead>
        <Tr>
          {/* TODO: Fix when handling i18n */}
          <Th>{lang === 'fr' ? 'Jour' : 'اليوم'}</Th>
          {Object.keys(NAMES).map((name: any, i: number) => {
            return <Th key={i}>{NAMES[name][lang]}</Th>;
          })}
        </Tr>
      </thead>

      <Tbody>
        {Object.entries(prayers || []).map(([_, prayer]: any, i: number) => {
          return (
            <Tr key={i} title={`${new Date(prayer.day).getDate() === today}`}>
              <Td>{new Date(prayer.day).getDate()}</Td>
              {NAMES_FR.map((name: string, j: number) => {
                return <Td key={j}>{prayer[name]}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );

  return (prayers || []).length > 0 ? table : <Spinner />;
};

export default Monthly;
