import * as React from 'react';
import styled from '../../styles/Theme';

// Types
import { Size, Direction } from './../Types';

interface ILabelGroupProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * `basic` Labels add a border and do not have a background. 
   * @default false 
   */
  basic?: boolean;
  /** 
   * Labels' background color, e.g. `skyblue`. 
   */
  color?: string;
  /** 
   * Labels point to other content to the `left`, `top`, `right` or `bottom`. Default direction is `left` 
   */
  pointing?: Direction;
  /** 
   * Size of Labels, one of `mini`, `tiny`, `small`, `medium`, `large`, `big`, `huge` and `massive`. *
   */
  size?: Size;
  /** 
   * If set, Labels appear as tags. 
   * @default false
   */
  tag?: boolean;
}

const LabelGroupBase = (props: ILabelGroupProps) =>
  // Clone all the children, adding group props to each (but
  // only if the child doesn't override them).
  <div className={props.className}>
    {React.Children.map(props.children, (child:any) => {
      return React.cloneElement(child as any, {
        basic:    child.props.basic    ?? props.basic,
        color:    child.props.color    ?? props.color,
        pointing: child.props.pointing ?? props.pointing,
        size:     child.props.size     ?? props.size,
        tag:      child.props.tag      ?? props.tag
      })
    })}
  </div>

const LabelGroupStyled = styled(LabelGroupBase)`
  display: inline-block;
`

const LabelGroup = (props: ILabelGroupProps) => <LabelGroupStyled {...props}/>

export { LabelGroup, ILabelGroupProps }
