import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { lighten } from '../../helper/lighten';

interface ILabelProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * An inline label floats before its control, not above it. 
   * @default false
   */
  inline?: boolean;
  /** 
   * A required label gets an asterisk.  
   * @default false
   */
  required?: boolean;
  /**
   * If true, show no asterisk for required fields.
   */
  noStar?: boolean;
}

const Required = styled.span`
  /* Required fields put an asterisk on the label. */ 
  color: ${p => p.theme.errorColor.color};
`

const LabelBase = (props: ILabelProps) =>
  <label className={props.className}>
    {props.children}
    {props.required && !props.noStar == true && <Required>*</Required>}
  </label>

const Label = styled(LabelBase)`
  position: relative;
  font-weight: 500;
  font-size: 80%;
  margin-right: 1em;
  color: ${p => lighten(0.5, p.theme.fontColor)};

  /* Ordinarily, labels are displayed above the field control: */
  display: block;
  /* ...but for inline fields, they are placed inline. */
  ${p => p.inline && css`
    display: inline;
  `}
`;

export { Label }
