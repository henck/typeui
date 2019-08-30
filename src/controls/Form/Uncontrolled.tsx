import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';
import { Hint } from './Hint';
import { Label } from './Label';

interface IProps {
  className?: string;
  /** Label to show, if any */
  label?: string;
  /** Place label inline with field control. */
  inline?: boolean;
  /** Relative width of field. If not set, field will not flex to fill available width. */
  width?: number;  
  /** Hint to show */
  hint?: React.ReactNode;
}

class UncontrolledBase extends React.Component<IProps, {}> {

  // Get field's label element, if any.
  private getLabel(): React.ReactNode {
    if(this.props.label) 
      return (<Label inline={this.props.inline}>{this.props.label}</Label>);
    return null;
  }  

  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        {this.getLabel()}
        {p.children}
        <Hint>{this.props.hint}</Hint>
      </div>
    );
  }
}

const UncontrolledStyled = styled(UncontrolledBase)`
  padding-bottom: 8px;
  
  /* Fields may provide their width in relative units to other fields. */
  ${p => p.width && css `flex: ${p.width}`}
`;

class Uncontrolled extends React.Component<IProps, {}> {
  public static displayName = "Form.Uncontrolled";
  
  render() {
    let p = this.props;
    return (
      <UncontrolledStyled {...p}/>
    )
  }  
}

export { Uncontrolled };
