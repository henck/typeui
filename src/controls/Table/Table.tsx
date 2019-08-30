import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IProps {
  className?: string;
  children?: React.ReactNode;
}

class TableBase extends React.Component<IProps, {}> {
  render() {
    let p = this.props;
    return (
      <table className={p.className}>{p.children}</table>
    );
  }
}

const Table = styled(TableBase)`
  width: 100%;
  border-collapse: separate;
  table-layout:fixed; /* Required for overflow-hidden to work in <td> */

  th {
    text-align: left;
    font-weight: 500;
    font-size: 12px;
    border-top: solid 1px ${p => p.theme.normalColor};
    border-bottom: solid 1px ${p => p.theme.normalColor};
    background: #f7f7f7;
  }

  th:first-child {
    border-top-left-radius: ${p => p.theme.radius}px;
    border-left: solid 1px ${p => p.theme.normalColor};
  }

  th:last-child {
    border-top-right-radius: ${p => p.theme.radius}px;
    border-right: solid 1px ${p => p.theme.normalColor};
  }

  td:first-child {
    border-left: solid 1px ${p => p.theme.normalColor};
  }

  td:last-child {
    border-right: solid 1px ${p => p.theme.normalColor};
  }  

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

  th, td {
    padding: 6px 8px 6px 8px;
  }

  tr:nth-child(2n) td {
    background-color: #f7f7f7;
  }
`

export { Table };