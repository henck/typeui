import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface ITableProps {
  className?: string;
  children?: React.ReactNode;
  /** If set, adds row striping. */
  striped?: boolean;
  /** If set, removes table border. */
  transparent?: boolean;
}

class TableBase extends React.Component<ITableProps, {}> {
  render() {
    let p = this.props;
    return (
      <table className={p.className}>{p.children}</table>
    );
  }
}

const TableStyled = styled(TableBase)`
  width: 100%;
  border-collapse: separate;
  table-layout: fixed; /* Required for overflow-hidden to work in <td> */

  th, td {
    padding: 6px 8px 6px 8px;
    text-align: left;
  }  

  th {
    font-weight: 500;
    font-size: 12px;
    background: #f7f7f7;
  }

  /* Border */
  ${p => !p.transparent && css`
    border-bottom-left-radius: ${p => p.theme.radius}px;
    border-bottom-right-radius: ${p => p.theme.radius}px;
    box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;

    th {
      border-top: solid 1px ${p => p.theme.normalColor};  
      border-bottom: solid 1px ${p => p.theme.normalColor};    
      &:first-child {
        border-top-left-radius: ${p => p.theme.radius}px;
        border-left: solid 1px ${p => p.theme.normalColor};
      }
      &:last-child {
        border-top-right-radius: ${p => p.theme.radius}px;
        border-right: solid 1px ${p => p.theme.normalColor};
      }      
    }

    /* Leftmost <td>'s have a left border */
    td:first-child {
      border-left: solid 1px ${p => p.theme.normalColor};
    }

    /* Rightmost <td>'s have a right border */
    td:last-child {
      border-right: solid 1px ${p => p.theme.normalColor};
    }  

    /* If there is no <thead>, then the first row has a border and rounded corners: */
    tbody:not(:nth-child(2)) tr:first-child {
      td {
        border-top: solid 1px ${p => p.theme.normalColor};
      }
      td:first-child {
        border-top-left-radius: ${p => p.theme.radius}px;
      }
      td:last-child {
        border-top-right-radius: ${p => p.theme.radius}px;
      }
    }

    /* Add border and rounding to last row */
    tr:last-child {
      td {
        border-bottom: solid 1px ${p => p.theme.normalColor};
      }
      td:first-child {
        border-bottom-left-radius: ${p => p.theme.radius}px;
      }
      td:last-child {
        border-bottom-right-radius: ${p => p.theme.radius}px;
      }
    }
  `}

  ${p => p.striped && css`
    tr:nth-child(2n) td {
      background-color: #f7f7f7;
    }
  `}
`

class Table extends React.PureComponent<ITableProps, {}> {
  render() {
    return (
      <TableStyled {...this.props}/>
    );
  }
}

export { Table };