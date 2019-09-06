import styled from '../../styles/Theme';

const Body = styled('div')`
  flex: 1;
  overflow-y: scroll;
`;

/* const Row = styled('div')`
  position: absolute;
  display: flex;
  width: 100%;
  cursor: pointer;
  background-color: #fff;
  &:not(:last-child) {
    border-bottom: solid 1px ${p => p.theme.normalColor};
  }
  transition: background-color ${p => p.theme.transition.duration}s ease;
  &:hover {
    background-color: #f9f9f9;
  }
`; */

const Table = styled('div')`
  position: relative;
  flex: 1;
`

const TableInner = styled('div')`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;  
`

export { Body, Table, TableInner };