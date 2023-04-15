import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 600px;
  margin: 0 auto;
  table-layot: fixed;
  border-collapse: collapse;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 0px 12px -2px;
`;
export const Thead = styled.thead`
  text-align: left;
  background-color: #6f7a65;
  height:32px;
`;
export const Th = styled.th`
    padding: 12px;
`
export const Tbody = styled.tbody`
    height: 40px;
    color: #1a1515e7;
  tr:nth-child(even) {
    background-color:#bce6be ;
  }
  tr:nth-child(odd) {
    background-color: #8db4a1;
  }
`
export const Tr = styled.tr`
    height: 40px;
`
export const Td = styled.td`
    padding: 12px;
`