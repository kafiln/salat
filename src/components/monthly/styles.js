import styled from 'styled-components';
import { Table as ExternalTable } from 'reactstrap';

export const Table = styled(ExternalTable)`
  border: ${(props) => `2px solid ${props.theme.color}`};
`;
export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  display: flex;
  justify-content: space-around;
  flex-direction: ${(props) =>
    props.lang === 'fr-fr' ? 'row' : 'row-reverse'};
  text-align: ${(props) => (props.lang === 'fr-fr' ? 'left' : 'right')};
  border-bottom: ${(props) => `1px solid ${props.theme.color}`};

  &.today {
    background-color: #2d3ede;
    color: white;
    font-weight: bold;
  }
`;

export const Td = styled.td`
  text-transform: capitalize;
  border-top: none !important;
  flex: 1;

  &.first {
    flex: 2;
  }
`;
export const Thead = styled.thead`
  & tr {
    background-color: grey;
    color: white;
    font-weight: bold;
  }
`;
