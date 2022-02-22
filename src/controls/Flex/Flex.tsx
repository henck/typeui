import * as React from 'react';
import styled from '../../styles/Theme';

// Other controls
import { Row } from './Row';
import { Column } from './Column';
import { Divider } from './Divider';
import { Quick } from './Quick';
import { Columns } from './Columns';

interface IFlexProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
  /** 
   * A stackable flex stacks when screen gets small. 
   * @default false
   */
  stackable?: boolean;
  /** 
   * A divided Flex shows a *horizontal* dividing line between rows, in the gutter. 
   * Use a `<Divider/>` for a vertical dividing line. 
   * @default false
   */
  divided?: boolean;
  /** 
   * A compact Flex has no VERTICAL gutter. 
   * @default false
   */
  compact?: boolean;
  /** 
   * A `relaxed` Flex has twice the gutter width, and a `very relaxed` Flex has 4 times gutter width. 
   * @default false 
   */
  relaxed?: 'very' | boolean;
}

class FlexBase extends React.Component<IFlexProps> {
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

/**
 * A Flex is used to create rows and columns that space equally.
 * 
 * @example
 * <Flex>
 *   <Flex.Row>
 *     <Flex.Column>
 *       <Box color="goldenrod">One</Box>
 *     </Flex.Column>
 *     <Flex.Column>
 *       <Box>Two</Box>
 *     </Flex.Column>
 *   </Flex.Row>
 *   <Flex.Row>
 *     <Flex.Column>
 *       <Box color="skyblue">Three</Box>
 *     </Flex.Column>
 *     <Flex.Column>
 *       <Box color="LightSalmon">Four</Box>
 *     </Flex.Column>
 *   </Flex.Row>
 * </Flex>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-flex--properties
 */
class Flex extends React.Component<IFlexProps> {
  /**
   * There can be multiple Flex.Row elements, but there is no vertical connection
   * between cells (this is not a grid).
   */
  public static Row = Row;

  /**
   * The width attribute of Flex.Column can be used to give weight to a column.
   */
  public static Column = Column;

  /**
   * A Flex.Divider can be added between two columns. This only works for exactly 
   * two columns. The divider automatically becomes horizontal when the screen is 
   * narrow enough and the Flex is stackable. An optional text can be placed in the 
   * divider element.
   */
  public static Divider = Divider;

  /**
   * A Flex.Quick is used to vertically-align content in a row, and putting small 
   * spacing between items. Optionally, an align prop of center, top or bottom can 
   * be provided. The default is center.
   */
  public static Quick = Quick;

  /**
   * Flex.Columns takes an array of children and builds them into stackable 
   * rows that contain exactly count items per row. The final row is filled up 
   * with null-elements. 
   */  
  public static Columns = Columns;

  render = () => <StyledFlex {...this.props}></StyledFlex>
}

export { Flex };