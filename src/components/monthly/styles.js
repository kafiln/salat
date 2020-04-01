import styled from 'styled-components';

export const Table = styled.table`
  /* padding: 4px; */
  border: solid black 2px;
  box-sizing: content-box;
`;
export const Tbody = styled.tbody`
  box-sizing: content-box;
  /* padding: 4px; */
`;

export const Tr = styled.tr`
  box-sizing: content-box;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: ${props => (props.title === 'true' ? 'blue' : '')};
`;

export const Td = styled.td`
  display: flex;
  margin: 10px;
`;
export const Th = styled.th`
  display: flex;
  margin: 10px;
  text-transform: capitalize;
  background-color: aqua;
`;
