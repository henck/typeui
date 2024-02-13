import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { Float } from '../Types';

// Other controls
import { Column } from './Column';
import { DropdownInner } from './DropdownInner';

interface IDropdownProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Dropdown name, for use in forms. */
  name?: string;
  /** Data to show in Dropdown. */
  data: any[];
  /** 
   * Dropdown's value can be cleared. 
   * @default false 
   */
  clearable?: boolean;
  /** Label function */
  label: (item:any) => React.ReactNode;
  /** Placeholder text. */
  placeholder?: string;
  /** Dropdown value. 
   *  The value is an object, not an ID!
   */
  value?: any; 
  /** 
   * Marks dropdown as disabled. 
   * @default false
   */
  disabled?: boolean;
  /** 
   * A fluid Dropdown occupies all horizontal space available to it. 
   * @default false
   */
  fluid?: boolean;
  /** 
   * An inline Dropdown has no border. Useful for menu items. 
   * @default false 
   */
  inline?: boolean;
  /** 
   * Gap between columns inside Dropdown body, in pixels.
   * @default 16
   */
  gap?: number;
  /** 
   * If set, Dropdown is in an error state. 
   * @default false 
   */
  error?: boolean;
  /** 
   * If set, allow multiple selection. 
   * @default false
   */
  multiple?: boolean;
  /** 
   * If true, the search query is reset when dropdown is opened 
   * (This only applies to dropdowns with an `onSearch` callback.)
   * @default false
   */
  resetOnOpen?: boolean;
  /** 
   * Max items to display before a scrollbar is added. Defaults to 6. 
   * @default 6
   */
  maxItems?: number;
  /**
   * The Dropdown opening direction can be either fixed
   * (`up` or `down`), or depend on the nearest scrolling parent: if the Dropdown
   * is in the top half of the visible section of the parent, then it opens
   * downward, and vice-versa. If this property is not set, then the opening
   * direction is determined from the Dropdown position in the viewport.
   */
  direction?: 'up' | 'down' | 'parent';

  // Events
  /** Listeners are notified whenever the user interacts with the input. */
  onChange?: (value: any) => void;
  /** If a search callback is provided, then the Dropdown will have a search box. */
  onSearch?: (q:string) => void;
  /** If a callback is provided, then listeners are notified when the dropdown is closed. */
  onClose?: () => void;
}

/*
 * DropdownBase puts a <div> around DropdownInner so that we 
 * can add attachable components.
 */
const DropdownBase = (props: IDropdownProps) => {
  const isAttachedTo = (c: any, side: Float) => {
    const attached = (c.props as any).attached;
    return attached === side || (!attached && side === 'left');
  }

  // Return an array of children that are Labels and attached to this
  // Input control.
  const getAttachables = (side: Float) => {
    return React.Children.toArray(props.children)
    .filter(
      c => React.isValidElement(c)     // Is this a React node?
      && (c.props as any).isLabel      // Is this a Label?
      && isAttachedTo(c, side)    // Is it attached to this side?
    )
    .map((c: any, idx: number) => {
      let attached = (c.props as any).attached;
      if(!attached) attached = 'left'; // Attach to left side by default.
      return React.cloneElement(c, { key: idx, attached: attached } as any);
    });
  }

  const getItems = () => {
    return React.Children.map(props.children, (child:any) => {
      // Only Columns are passed to DropdownInner.
      if(child.type && child.type === Column) return child;
    })
  }

  const {className, ...restprops} = props;
  return (
    <div className={className}>
      {getAttachables('left')}      
      <DropdownInner {...restprops}>
        {getItems()}
      </DropdownInner>
      {getAttachables('right')}
    </div>
  )
}


const DropdownStyled = styled(DropdownBase)`
  position:    relative;
  display:     inline-flex;
  align-items: stretch;
  color:       ${p => p.theme.fontColor};
  /* Dropdown has a minimum width. */
  width: 250px;
  /* A fluid Dropdown occupies full horizontal width. */
  ${p => p.fluid && css`width: 100%;`}  
`;

/**
 * A `Dropdown` is a replacement for `<select>` (select). It opens upwards or 
 * downwards depending on its position in the viewport. Its selection and 
 * dropdown items are formatted using a formatting function. A Dropdown can 
 * also take an `onSearch` callback, which tells provides its subscriber with 
 * a search query in order to provide the `Dropdown` with new items.
 * 
 * @example 
 * <Dropdown 
 *   data={[{id: 1, name: 'One'}, {id: 2, name: 'Two'}, {id: 3, name: 'Three'}]}
 *   label={(item: any) => item.name}
 *   placeholder="Select one"
 * >
 *   <Dropdown.Column>{(item: any) => item.name}</Dropdown.Column>
 * </Dropdown>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-dropdown--properties
 */
const Dropdown = (props: IDropdownProps) =>
  <DropdownStyled {...props}></DropdownStyled>

/**
 * A Dropdown.Column's child is an item formatter function. A column can 
 * optionally take a weight and an alignment.
 */
Dropdown.Column = Column;

export { Dropdown, IDropdownProps }
