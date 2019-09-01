import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Types
import { Float } from '../Types';

// Other controls
import { Column } from './Column';
import { DropdownInner } from './DropdownInner';
import { Label } from '../Label/Label';

interface IDropdownProps {
  className?: string;
  /** Dropdown name, for use in forms. */
  name?: string;
  /** Data to show in Dropdown. */
  data: any[];
  /** Dropdown's value can be cleared. */
  clearable?: boolean;
  /** Label function */
  label: (item:any) => React.ReactNode;
  /** Placeholder text. */
  placeholder?: string;
  /** Dropdown value. 
   *  The value is an object, not an ID!
   */
  value?: any; 
  /** A fluid Dropdown occupies all horizontal space available to it. */
  fluid?: boolean;
  /** An inline Dropdown has no border. Useful for menu items. */
  inline?: boolean;
  /** If set, Dropdown is in an error state. */
  error?: boolean;
  /** If set, allow multiple selection. */
  multiple?: boolean;
  /** If true, the search query is reset when dropdown is opened 
   *  (This only applies to dropdowns with an `onSearch` callback.)
   */
  resetOnOpen?: boolean;

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
class DropdownBase extends React.Component<IDropdownProps, {}> {
  getAttachables = (side:Float = "left") => {
    return React.Children.map(this.props.children, (child:any) => {
      if(child.type && child.type === Label) {
        // Does label have 'attached' attribute, and it is equal to side?
        if(child.props.attached && child.props.attached === side) return child;
        // No attached attribute, but side is left? Then add attached attribute.
        if(!child.props.attached && side === 'left') {
          return React.cloneElement(child, { attached: 'left'});
        }
      }
    });
  }

  getItems = () => {
    return React.Children.map(this.props.children, (child:any) => {
      // Only Columns are passed to DropdownInner.
      if(child.type && child.type === Column) return child;
    })
  }

  render() {
    let {className, ...p} = this.props;
    return (
      <div className={className}>
        {this.getAttachables('left')}      
        <DropdownInner {...p}>
          {this.getItems()}
        </DropdownInner>
        {this.getAttachables('right')}
      </div>
    )
  }
}


const DropdownStyled = styled(DropdownBase)`
  position:    relative;
  display:     inline-flex;
  align-items: stretch;
  color:       ${p => p.theme.fontColor};
  /* Unless inline, a Dropdown has a minimum width. */
  ${p => !p.inline && css`width: 250px;`}
  /* A fluid Dropdown occupies full horizontal width. */
  ${p => p.fluid && css`width: 100%;`}  
`;

/* Dropdown is merely a wrapper that allows us to add static
 * members to Dropdown, which we cannot do for a Styled Component
 * (in TypeScript). */
class Dropdown extends React.Component<IDropdownProps, {}> {
  public static displayName = "Dropdown";
  public static Column = Column;

  render() {
    let p = this.props;
    return (
      <DropdownStyled {...p}></DropdownStyled>
    )
  }  
}

(Dropdown.Column as any).displayName = "Dropdown.Column";


export { IDropdownProps, Dropdown };
