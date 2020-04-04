import styled from 'styled-components';

export const Table = styled.table`
  /* padding: 4px; */
  border: ${(props) => `2px solid ${props.theme.color}`};
`;
export const Tbody = styled.tbody`
  box-sizing: content-box;
  padding: 4px;
`;

export const Tr = styled.tr`
  box-sizing: content-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.color}`};
  background-color: ${(props) => props.title === 'true' && '#2d3ede'};
  background-color: ${(props) => props.title === 'header' && 'grey'};
  color: ${(props) => props.title === 'true' && 'white'};
  flex-direction: ${(props) =>
    props.lang === 'fr-fr' ? 'row' : 'row-reverse'};
`;

export const Td = styled.td`
  display: flex;
  margin: 10px;
`;
export const Thead = styled.thead`
  text-transform: capitalize;
  background-color: 'yellow';
`;
