import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Other controls
import { Hint } from './Hint';
import { Label } from './Label';

interface IProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Label to show, if any */
  label?: string;
  /** 
   * Place label inline with field control. 
   * @default false
   */
  inline?: boolean;
  /** Relative width of field. If not set, field will not flex to fill available width. */
  width?: number;  
  /** Hint to show */
  hint?: React.ReactNode;
}

const UncontrolledBase = (props: IProps) => {

  // Get field's label element, if any.
  const getLabel = (): React.ReactNode => {
    if(props.label) 
      return (<Label inline={props.inline}>{props.label}</Label>);
    return null;
  }  

  return (
    <div className={props.className}>
      {getLabel()}
      {props.children}
      <Hint>{props.hint}</Hint>
    </div>
  );
}

const UncontrolledStyled = styled(UncontrolledBase)`
  padding-bottom: 8px;
  /* Fields may provide their width in relative units to other fields. */
  ${p => p.width && css `flex: ${p.width}`}
`;

const Uncontrolled = (props: IProps) =>
  <UncontrolledStyled {...props}/>

export { Uncontrolled, IProps }
