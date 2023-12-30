import * as React from 'react';
import styled from '../../styles/Theme';

interface IFormHintProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
}

const HintBase = (props: IFormHintProps) =>
  <div className={props.className}>{props.children}</div>

const Hint = styled(HintBase)`
  font-size: 80%;
  line-height: 1.4em;
  color: #aaa;
  padding-top: 4px;
  padding-left: 4px;
`;

export { Hint }
