import * as React from 'react';

// Other controls
import { Flex } from './Flex';

interface IColumnsProps {
  /** @ignore */
  children?: React.ReactNode;
  /**
   * Number of columns to show.
   */
  count: number;
}

/*
 * Flex.Columns takes an array of children and builds them into stackable 
 * rows that contain exactly count items per row.
 * 
 * The final row is filled up with null-elements.
 */
const Columns = (props: IColumnsProps) => {
  let children = React.Children.toArray(props.children);
  return (
    <Flex stackable compact>
      {children.map((item, index) => index % props.count === 0 ? children.slice(index, index + props.count) : null )
        .filter((item) => item)
        .map((item, idx) => {
          while(item.length < props.count) item.push(null);
          return (<Flex.Row key={idx}>
            {item.map((item, idx) => <Flex.Column width={1} key={idx}>{item}</Flex.Column>)}
          </Flex.Row>)})}
    </Flex>
  );
}

export { Columns, IColumnsProps }
