import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Other controls
import { Hint } from './Hint';
import { Label } from './Label';
import { FieldWrapper } from './FieldWrapper';

interface IProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Label to show by field. Can be JSX. */
  label?: React.ReactNode;
  /**
   * If true, field has a boxed appearance. This places a border around the 
   * field, which is clickable and moves focus to the contained control.
   */  
  boxed?: boolean;
  /** 
   * Place label inline with field control. 
   * @default false
   */
  inline?: boolean;
  /** 
   * Relative width of field. If not set, field will not flex to fill 
   * available width. 
   */
  width?: number;  
  /** Hint to show */
  hint?: React.ReactNode;
}

const Uncontrolled = (props: IProps) => {

  // Get field's label element, if any.
  const getLabel = (): React.ReactNode => {
    if(props.label) 
      return (<Label inline={props.inline}>{props.label}</Label>);
    return null;
  }  

  return (
    <FieldWrapper boxed={props.boxed} width={props.width}>
      {getLabel()}
      {props.children}
      <Hint>{props.hint}</Hint>
    </FieldWrapper>
  );
}

export { Uncontrolled }
