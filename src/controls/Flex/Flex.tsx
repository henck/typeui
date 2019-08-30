import * as React from 'react';
import styled from '../../styles/Theme';
import { Row } from './Row';
import { Column } from './Column';
import { Divider } from './Divider';
import { Quick } from './Quick';
import { Columns } from './Columns';

interface IFlexProps {
  className?: string;
  children?: React.ReactNode;
  /** A stackable flex stacks when screen gets small. */
  stackable?: boolean;
  /** A divided Flex shows a *horizontal* dividing line between rows, in the gutter. 
   *  Use a <Divider/> for a vertical dividing line. */
  divided?: boolean;
  /** A compact Flex has no VERTICAL gutter. */
  compact?: boolean;
  /** A relaxed Flex has twice the gutter width, a "very" relaxed Flex has 4 times gutter width. */
  relaxed?: 'very' | boolean;
}

class FlexBase extends React.Component<IFlexProps, {}> {
  render() {
    let p = this.props;

    // Determine gutter width:
    let gutter: number = 1;
    if(p.relaxed) gutter = gutter * 2;
    if(p.relaxed === 'very') gutter = gutter * 2;

    // Copy 'stackable', 'divided' and 'gutter' props into children.
    return (
      <div className={p.className}>
        {React.Children.map(p.children, (child:any) => 
          child == null ? null : React.cloneElement(child, { stackable: p.stackable, divided: p.divided, compact: p.compact, gutter: gutter })
        )}
      </div>
    );
  }
}

const StyledFlex = styled(FlexBase)`
  position: relative;
  display: flex;
  /* Flex is column-first, then row. */
  flex-direction: column;
`;

class Flex extends React.Component<IFlexProps, {}> {
  public static displayName = "Flex";
  public static Row = Row;
  public static Column = Column;
  public static Divider = Divider;
  public static Quick = Quick;
  public static Columns = Columns;

  render() {
    let p = this.props;
    return (
      <StyledFlex {...p}></StyledFlex>
    );
  }
}

export { Flex };