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

const DropdownInnerBase = (props: IDropdownProps) => {
  // public static Column = Column;
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  /** Is dropdown currently open? */
  const [open, setOpen] = React.useState(false);
  /** Does the Dropdown open upwards? This happens when it is on the lower half of the viewport. */
  const [upwards, setUpwards] = React.useState(false);
  /** Current search query */
  const [search, setSearch] = React.useState<string>(null);

  // A mousedown event listener is attached to the document. When the document
  // is clicked anywhere but this Dropdown, the Dropdown closes.

  React.useEffect(() => {
    // Listen for document-wide mousedown/keydown events when Dropdown mounts.
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      // Clean up document-wide mousedown/keydown events when Dropdown unmounts.
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);
 
  // Handle document-wide mousedown event by closing the Dropdown.
  const handleClickOutside = (event: MouseEvent) => {
    let elem:Element = event.target as Element;
    if (wrapperRef.current && !wrapperRef.current.contains(elem)) {
      doClose();
    }
  }  

  // Open the dropdown.
  const doOpen = () => {
    // Is the Dropdown below the middle of the viewport?
    let below = wrapperRef.current.getBoundingClientRect().top > window.innerHeight / 2;
    if(props.alwaysDown) below = false;
    setOpen(true);
    setUpwards(below);
    // If reset on open is specified, then the search query is reset whenever the
    // dropdown opens or reopens.
    if(props.resetOnOpen) setSearch(null);
    // If a search box is present, move focus to it:
    if(props.onSearch) {
      const input = wrapperRef.current.querySelector('input');
      input.focus();
      // In IE/Chrome, body content scrolls up a little when setting focus
      // to search input. Scroll it back to top.
      wrapperRef.current.children[1].scrollTop = 0;
    }
  }

  // Close the dropdown.
  const doClose = () => {
    setOpen(false);
    // When the dropdown is closed, an onClose event may be fired.
    // It is fired 300ms after dropdown closure to give the close
    // animation a chance to run, before any changes are made
    // to the dropdown's contents.
    if(props.onClose) {
      setTimeout(props.onClose, 300);
    }
  }

  // The selector was clicked, open the Dropdown, or close
  // it if it was open.
  const handleSelectorClicked = () => {
    // Disabled input cannot be clicked.
    if(props.disabled) return;
    if(open) {
      doClose();
    } else {
      doOpen();
    }
  }  

  //
  // Given a single character, find the first data item that starts with
  // that character. If such an item is found, it is made the current selection.
  // 
  // Data items are compared by converting them to strings. If a data item is
  // an object, all its keys are converted to strings and compared.
  // 
  const selectItemByCharacter = (c: string) => {
    c = c.toLowerCase();
    // Go through all (non-null) data records:
    let idx = props.data.filter(r => r != null).findIndex(row => {
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
      handleClick(props.data[idx]);
    }
  }

  const selectPreviousItem = () => {
    let prevIndex = props.data.indexOf(props.value) - 1;
    if(prevIndex < 0) prevIndex = 0;
    if(props.data.length <= prevIndex) return;
    handleClick(props.data[prevIndex]);    
  }

  const selectNextItem = () => {
    const nextIndex = props.data.indexOf(props.value) + 1;
    if(props.data.length <= nextIndex) return;
    handleClick(props.data[nextIndex]);
  }

  //
  // A key was pressed while the selector had focus.
  // 
  const handleKeyDown = (e: KeyboardEvent) => {
    if(document.activeElement != wrapperRef.current) return;

    if(props.disabled) return;
    let key = e.key;

    if(key == 'Escape' || key == 'Tab') {
      e.stopPropagation();
      if(!open) return;
      doClose();
    }
    
    // Is space or enter pressed?
    if(key == ' ' || key == 'Enter') {
      e.stopPropagation();
      if(open) return;
      doOpen();
    }

    if(key == 'ArrowUp') {
      e.stopPropagation();
      selectPreviousItem();
    }

    if(key == 'ArrowDown') {
      e.stopPropagation();
      selectNextItem();
    }

    // Is a letter or a digit pressed?
    if(key.length == 1 && key.match(/[a-z0-9]/i)) {
      e.stopPropagation();
      selectItemByCharacter(key);
    }

    // Any other key's propagation is not stopped (most importantly
    // the TAB key to navigate to the next control).
  }

  const setValue = (item: any) => {
    doClose();
    if(props.onChange) {
      props.onChange(item);
    }
  }

  // An item was clicked. Close Dropdown and call onChange.
  const handleClick = (item: any) => {
    // Is this a multiple-selection dropdown?
    if(props.multiple) {
      let array = props.value as Array<any>;
      if(array == null) array = [];
      // Compare the new item with the existing selection items
      // using deep comparision.
      let newItem = JSON.stringify(item);
      if(array.find((x) => JSON.stringify(x) == newItem)) {
        // Item already in selection. Just re-set the
        // existing selection.
        setValue(array);
      } else {
        // Item not in selection. Add it.
        array.push(item);
        setValue(array);
      }
    } 
    // Not a multiple-selection dropdown. Simply
    // set the selection to the new item.
    else {
      setValue(item);
    }
  }  

  // Remove item from selection.
  const handleDelete = (item:any) => {
    // Find item in value array:
    let array = props.value as Array<any>;
    let toDelete = JSON.stringify(item);
    let index = array.findIndex((x) => JSON.stringify(x) == toDelete);
    // Remove item from selection:
    array.splice(index, 1);
    // Set new selection:
    setValue(array);
  }
  
  const handleClear = () => {
    if(props.multiple) {
      setValue([]);
    } else {
      setValue(null);
    }
  }

  // Search is debounced by 350ms:
  const doSearch = (value:string) => props.onSearch(value);
  const doSearchBebounced = AwesomeDebouncePromise(doSearch, 350);
  const handleSearch = async (value: string) => {
    setSearch(value);
    doSearchBebounced(value);
  }

  // Determine children:
  const getBodyChildren = () => {
    let count: number = 1;
    return props.data.map((row) => {
      return (<Row key={count++} upwards={upwards} onClick={() => handleClick(row)}>{
        React.Children.map(props.children, (child:Column) => {
          return <Cell item={row} weight={child.props.weight} align={child.props.align}>{child.props.children}</Cell>
        })
      }</Row>);
    });    
  }

  // Determine label:
  // By default, we use the placeholder.
  let label: any = props.placeholder;
  let showPlaceholder = true;
  
  // Single-selection dropdowns:
  // If the Dropdown has a value, format it and use as label.
  if(!props.multiple) {
    if(props.value !== null && props.value !== undefined) {
      label = (props.label as any)(props.value);
      showPlaceholder = false;
    }
  }

  // Multiple-selection dropdowns:
  if(props.multiple) {
    // Warn if value is not an array, and not null:
    if(!Array.isArray(props.value) && props.value !== null && props.value !== undefined) {
      console.error("In a multiple-selection checkbox, value should be an array.");
    }
    // Is the value not the empty array, and not null?
    if(props.value != null && props.value.length > 0) {
      showPlaceholder = false;
      // Turn value elements into Selections.
      label = props.value.map((item:any, index: number) => 
        <Selection key={index} onClick={() => handleDelete(item)}>{(props.label as any)(item)}</Selection>  
      );
    }
  }

  const children = getBodyChildren();

  return (
    <div tabIndex={0} className={props.className} ref={wrapperRef}>
      <Selector 
        open={open} 
        error={props.error}
        disabled={props.disabled}
        upwards={upwards}
        inline={props.inline} 
        multiple={props.multiple}
        onClick={handleSelectorClicked} 
        onClear={(props.clearable && !showPlaceholder) ? handleClear : null}
        placeholder={showPlaceholder}>
        {label}
      </Selector>      
      <Body 
        open={open} 
        upwards={upwards} 
        inline={props.inline}
        error={props.error}
        maxItems={props.maxItems}
        onSearch={props.onSearch ? handleSearch : null}
        search={search}>
        {children}
      </Body>
    </div>
  )
}

const DropdownInnerStyled = styled(DropdownInnerBase)`
  display: block;
  position: relative;
  width: 100%;
  outline: none;

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

const DropdownInner = (props: IDropdownProps) => <DropdownInnerStyled {...props}/>

export { DropdownInner, IDropdownProps }
