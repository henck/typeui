import * as React from 'react';
import styled from '../../styles/Theme';
import { Size, Direction } from './../Types';

interface ILabelGroupProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  /** Add border, do not use background */
  basic?: boolean;
  /** Label background color */
  color?: string;
  /** Point to other content. Default direction is "left" */
  pointing?: Direction;
  /** Label size. */
  size?: Size;
  /** Label appears as a tag */
  tag?: boolean;
}

class LabelGroupBase extends React.Component<ILabelGroupProps, {}> {
  render() {
    let p = this.props;
    // Clone all the children, adding group props to each (but
    // only if the child doesn't override them).
    return (
      <div className={p.className}>
        {React.Children.map(p.children, (child:any) => {
          return React.cloneElement(child as any, {
            basic:    child.props.basic    ? child.props.basic    : this.props.basic,
            color:    child.props.color    ? child.props.color    : this.props.color,
            pointing: child.props.pointing ? child.props.pointing : this.props.pointing,
            size:     child.props.size     ? child.props.size     : this.props.size,
            tag:      child.props.tag      ? child.props.tag      : this.props.tag
          })
        })}
      </div>
    )
  }  
}

const LabelGroupStyled = styled(LabelGroupBase)`
  display: inline-block;
`;

class LabelGroup extends React.Component<ILabelGroupProps, {}> {
  public static displayName = "Label.Group";
  
  render() {
    let p = this.props;
    return (
      <LabelGroupStyled {...p}/>
    )
  }  
}

export { LabelGroup };