import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import usePrayers from '../../hooks/usePrayers';
import { Spinner } from '../../common/spinner/styles';
import { Table, Tbody, Tr, Td, Thead } from './styles';

const NAMES = require('../../data/prayers.json');

const NAMES_FR = Object.keys(NAMES).map((e) => e);

const Monthly = () => {
  const { lang, id } = useContext(AppContext);
  const today = new Date().getDate();

  let prayers = usePrayers(id);

  const table = (
    <Table>
      <Thead>
        <Tr lang={lang} title="header">
          {/* TODO: Fix when handling i18n */}
          <Td>{lang === 'fr' ? 'Jour' : 'اليوم'}</Td>
          {Object.keys(NAMES).map((name: any, i: number) => {
            return <Td key={i}>{NAMES[name][lang]}</Td>;
          })}
        </Tr>
      </Thead>

      <Tbody>
        {Object.entries(prayers || []).map(([_, prayer]: any, i: number) => {
          return (
            <Tr
              lang={lang}
              key={i}
              title={`${new Date(prayer.day).getDate() === today}`}
            >
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
