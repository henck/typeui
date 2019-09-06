import * as React from 'react';
import styled from '../../styles/Theme';
import { Number } from '../../formatters/Number';

interface ICounterProps {
  className?: string;
  /** Total number of records */
  count: number;
  /** 1-based index of first record shown */
  first: number;
  /** 1-based index of last record shown */
  last: number;
}

/**
 * Counter works with DataTable to show a label containing
 * the total number of records, and the indices of the first to
 * last record currently being scrolled to.
 */
class CounterBase extends React.Component<ICounterProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <span>{p.first}</span>-<span><Number value={Math.min(p.last, p.count)} decimals={0}/></span> of <span><Number value={p.count} decimals={0}/></span> {p.count == 1 && 'record'}{p.count != 1 && 'records'}
      </div>
    );
  }
}

const Counter = styled(CounterBase)`
  position: absolute;
  right: 30px;
  bottom: 15px;
  cursor: default;
  border: solid 1px ${p => p.theme.normalColor};
  border-radius: ${p => p.theme.radius}px;
  background: #fff;
  padding: 3px 8px 3px 8px;
  font-size: 12px;
  box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;
  & > span {
    font-weight: 500;
  }
`

export { Counter };