import styled from '../../styles/Theme';

const Body = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

const Table = styled.div`
  position: relative;
  flex: 1;
`

const TableInner = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;  
`

export { Body, Table, TableInner }
