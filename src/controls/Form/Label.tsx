import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

interface ILabelProps {
  /** @ignore */
  className?: string;
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
}

const Required = styled('span')`
  /* Required fields put an asterisk on the label. */ 
  color: ${p => p.theme.errorColor.color};
`

class LabelBase extends React.Component<ILabelProps, {}> {
  render() {
    let p = this.props;
    return (
      <label className={this.props.className}>
        {p.children}
        {p.required && (<Required>*</Required>)}
      </label>
    );
  }
}

const Label = styled(LabelBase)`
  position: relative;
  font-weight: 500;
  font-size: 80%;
  margin-right: 1em;

  /* Ordinarily, labels are displayed above the field control: */
  display: block;
  /* ...but for inline fields, they are placed inline. */
  ${p => p.inline && css`
    display: inline;
  `}
`;

export { Label }
