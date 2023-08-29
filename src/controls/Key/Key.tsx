import * as React from 'react';
import styled from '../../styles/Theme';

interface IProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
}

const KeyBase = (props: IProps) =>
  <div className={props.className}>
    {props.children}
  </div>

const KeyStyled = styled(KeyBase)`
  border:        solid 1px #aaa;
  border-radius: 4px;
  padding:       2px 4px 2px 4px;
  height:        10px;
  line-height:   10px;
  font-size:     10px;
`

/**
 * A `Key` displays a keyboard key. The children are the key description,
 * e.g. "CTRL" or "ALT".
 */
const Key = (props: IProps) => <KeyStyled {...props}/>

export { Key }
