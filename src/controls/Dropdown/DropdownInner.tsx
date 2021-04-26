import * as React from 'react';
import styled from '../../styles/Theme';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

// Other controls
import { Column } from './Column';
import { Cell } from './Cell';
import { Row } from './Row';
import { Body } from './Body';
import { IDropdownProps } from './Dropdown';
import { Selector } from './Selector';
import { Selection } from './Selection';
import { Input } from '../Input/Input';

interface IDropdownState {
  /** Is dropdown currently open? */
  open: boolean;
  /** Does the Dropdown open upwards? This happens when it is on the lower half of the viewport. */
  upwards: boolean;
  /** Current search query */
  search: string;
}

class DropdownInnerBase extends React.Component<IDropdownProps, IDropdownState> {
  public static Column = Column;
  private wrapperElement: HTMLDivElement;

  constructor(props: IDropdownProps) {
    super(props);
    this.state = {
      open: false,
      upwards: false,
      search: ''
    };
  }

  // A mousedown event listener is attached to the document. When the document
  // is clicked anywhere but this Dropdown, the Dropdown closes.

  componentDidMount() {
    // Listen for document-wide mousedown/keydown events when Dropdown mounts.
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up document-wide mousedown/keydown events when Dropdown unmounts.
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  
  // Handle document-wide mousedown event by closing the Dropdown.
  private handleClickOutside = (event: MouseEvent) => {
    let elem:Element = event.target as Element;
    if (this.wrapperElement && !this.wrapperElement.contains(elem)) {
      this.close();
    }
  }  

  // Open the dropdown.
  private open() {
    // Is the Dropdown below the middle of the viewport?
    let below = this.wrapperElement.getBoundingClientRect().top > window.innerHeight / 2;
    this.setState({ open: true, upwards: below });
    // If reset on open is specified, then the search query is reset whenever the
    // dropdown opens or reopens.
    if(this.props.resetOnOpen) this.setState({ search: '' });
    // If a search box is present, move focus to it:
    if(this.props.onSearch) {
      let input = this.wrapperElement.querySelector('input');
      input.focus();
      // In IE/Chrome, body content scrolls up a little when setting focus
      // to search input. Scroll it back to top.
      this.wrapperElement.children[1].scrollTop = 0;
    }
  }

  // Close the dropdown.
  private close = () => {
    this.setState({ open: false });
    // When the dropdown is closed, an onClose event may be fired.
    // It is fired 300ms after dropdown closure to give the close
    // animation a chance to run, before any changes are made
    // to the dropdown's contents.
    if(this.props.onClose) {
      setTimeout( this.props.onClose, 300 );
    }
  }

  // The selector was clicked, open the Dropdown, or close
  // it if it was open.
  private handleSelectorClicked = () => {
    // Disabled input cannot be clicked.
    if(this.props.disabled) return;
    if(this.state.open) {
      this.close();
    } else {
      this.open();
    }
  }  

  //
  // Given a single character, find the first data item that starts with
  // that character. If such an item is found, it is made the current selection.
  // 
  // Data items are compared by converting them to strings. If a data item is
  // an object, all its keys are converted to strings and compared.
  // 
  private selectItemByCharacter = (c: string) => {
    c = c.toLowerCase();
    // Go through all (non-null) data records:
    let idx = this.props.data.filter(r => r != null).findIndex(row => {
      // Build a list of strings contained in the data row:
      let strings: string[] = [];
      // If data row is an object, convert all its keys to string.
      if(typeof row === 'object' && row != null) {
        for(let p in row) strings.push(row[p].toString());
      // If data row is not an object, just convert its value to a string.
      } else {
        strings.push(row.toString());
      }
      return strings.find(s => s.length > 0 && s.charAt(0).toLowerCase() == c);
    });

    // Was a matching row found?
    if(idx != -1) {
      this.handleClick(this.props.data[idx]);
    }
  }

  private selectPreviousItem = () => {
    let prevIndex = this.props.data.indexOf(this.props.value) - 1;
    if(prevIndex < 0) prevIndex = 0;
    if(this.props.data.length <= prevIndex) return;
    this.handleClick(this.props.data[prevIndex]);    
  }

  private selectNextItem = () => {
    let nextIndex = this.props.data.indexOf(this.props.value) + 1;
    if(this.props.data.length <= nextIndex) return;
    this.handleClick(this.props.data[nextIndex]);
  }

  //
  // A key was pressed while the selector had focus.
  // 
  private handleKeyDown = (e: KeyboardEvent) => {
    if(document.activeElement != this.wrapperElement) return;

    if(this.props.disabled) return;
    let key = e.key;

    if(key == 'Escape' || key == 'Tab') {
      e.stopPropagation();
      if(!this.state.open) return;
      this.close();
    }
    
    // Is space or enter pressed?
    if(key == ' ' || key == 'Enter') {
      e.stopPropagation();
      if(this.state.open) return;
      this.open();
    }

    if(key == 'ArrowUp') {
      e.stopPropagation();
      this.selectPreviousItem();
    }

    if(key == 'ArrowDown') {
      e.stopPropagation();
      this.selectNextItem();
    }

    // Is a letter or a digit pressed?
    if(key.length == 1 && key.match(/[a-z0-9]/i)) {
      e.stopPropagation();
      this.selectItemByCharacter(key);
    }

    // Any other key's propagation is not stopped (most importantly
    // the TAB key to navigate to the next control).
  }

  private setValue(item: any) {
    this.close();
    if(this.props.onChange) {
      this.props.onChange(item);
    }
  }

  // An item was clicked. Close Dropdown and call onChange.
  private handleClick = (item: any) => {
    // Is this a multiple-selection dropdown?
    if(this.props.multiple) {
      let array = this.props.value as Array<any>;
      if(array == null) array = [];
      // Compare the new item with the existing selection items
      // using deep comparision.
      let newItem = JSON.stringify(item);
      if(array.find((x) => JSON.stringify(x) == newItem)) {
        // Item already in selection. Just re-set the
        // existing selection.
        this.setValue(array);
      } else {
        // Item not in selection. Add it.
        array.push(item);
        this.setValue(array);
      }
    } 
    // Not a multiple-selection dropdown. Simply
    // set the selection to the new item.
    else {
      this.setValue(item);
    }
  }  

  // Remove item from selection.
  handleDelete = (item:any) => {
    // Find item in value array:
    let array = this.props.value as Array<any>;
    let toDelete = JSON.stringify(item);
    let index = array.findIndex((x) => JSON.stringify(x) == toDelete);
    // Remove item from selection:
    array.splice(index, 1);
    // Set new selection:
    this.setValue(array);
  }
  
  private handleClear = () => {
    if(this.props.multiple) {
      this.setValue([]);
    } else {
      this.setValue(null);
    }
  }

  // Search is debounced by 350ms:
  private doSearch = (value:string) => this.props.onSearch(value);
  private doSearchBebounced = AwesomeDebouncePromise(this.doSearch, 350);
  private handleSearch = async (value: string) => {
    this.setState({
      search: value
    })
    this.doSearchBebounced(value);
  }

  // Determine children:
  private getBodyChildren() {
    let count: number = 1;
    return this.props.data.map((row) => {
      return (<Row key={count++} upwards={this.state.upwards} onClick={() => this.handleClick(row)}>{
        React.Children.map(this.props.children, (child:Column) => {
          return <Cell item={row} weight={child.props.weight} align={child.props.align}>{child.props.children}</Cell>
        })
      }</Row>);
    });    
  }

  render() {
    let p = this.props;

    // Determine label:
    // By default, we use the placeholder.
    let label: any = p.placeholder;
    let showPlaceholder = true;
    
    // Single-selection dropdowns:
    // If the Dropdown has a value, format it and use as label.
    if(!this.props.multiple) {
      if(p.value) {
        label = (p.label as any)(p.value);
        showPlaceholder = false;
      }
    }

    // Multiple-selection dropdowns:
    if(this.props.multiple) {
      // Warn if value is not an array, and not null:
      if(!Array.isArray(p.value) && p.value !== null) {
        console.error("In a multiple-selection checkbox, value should be an array.");
      }
      // Is the value not the empty array, and not null?
      if(p.value != null && p.value.length > 0) {
        showPlaceholder = false;
        // Turn value elements into Selections.
        label = p.value.map((item:any, index: number) => 
          <Selection key={index} onClick={() => this.handleDelete(item)}>{(p.label as any)(item)}</Selection>  
        );
      }
    }

    let children = this.getBodyChildren();

    return (
      <div tabIndex={0} className={p.className} ref={(el:any) => this.wrapperElement = el}>
        <Selector 
          open={this.state.open} 
          error={this.props.error}
          disabled={this.props.disabled}
          upwards={this.state.upwards}
          inline={p.inline} 
          multiple={p.multiple}
          onClick={this.handleSelectorClicked} 
          onClear={(p.clearable && !showPlaceholder) ? this.handleClear : null}
          placeholder={showPlaceholder}>
          {label}
        </Selector>      
        <Body 
          open={this.state.open} 
          upwards={this.state.upwards} 
          inline={p.inline}
          error={p.error}
          onSearch={p.onSearch ? this.handleSearch : null}
          search={this.state.search}>
          {children}
        </Body>
      </div>
    )
  }  
}

const DropdownInnerStyled = styled(DropdownInnerBase)`
  display: block;
  position: relative;
  width: 100%;
  outline: none;
  /* By setting transform other than 'none', we force position:fixed elements
   * inside this element to use this element as their parent container, rather
   * than the whole document. */
  transform: scaleX(1);

  /* If something is attached to the Dropdown, remove its border radius. */
  &:not(:first-child) {
    ${Selector} {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  &:not(:last-child) {
    ${Selector} {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }  
`

class DropdownInner extends React.Component<IDropdownProps, {}> {
  render() {
    let p = this.props;
    return (
      <DropdownInnerStyled {...p}></DropdownInnerStyled>
    );
  }
}

export { DropdownInner };
