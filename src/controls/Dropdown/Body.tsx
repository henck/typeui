import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Helpers
import { lighten } from '../../helper/lighten';
import { Input } from '../Input';

interface IBodyProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /* Is the Dropdown currently open? */
  open: boolean;
  /* Is the Dropdown currently in an error state? */
  error: boolean;
  /** A Dropdown can open upwards, which affects its styles. */
  upwards: boolean;
  /** Is Dropdown inline? */
  inline?: boolean;
  /** Max visible items before a scrollbar is added. Defaults to 6. */
  maxItems?: number;
  /** Search callback (optional) */
  onSearch?: (q: string) => void;
  /** Current search value */
  search?: string;
}

const BodyBase = (props: IBodyProps) => 
  <div className={props.className}>
    {props.onSearch &&
      <SearchBox>
        <Input icon="search" clearable error={props.error} value={props.search} transparent fluid type="text" onChange={props.onSearch}/>
      </SearchBox>}
    <BodyInner>
      {props.children}
    </BodyInner>
  </div>

// Maximum number of children before scrollbar is added.
const MAX_CHILDREN_VISIBLE = 6;

/** 
 * A search input is contained in a SearchBox to give it the same
 * height as other list items. This is important for opening/closing
 * the list to the correct height.
 */
const SearchBox = styled.div`
`

const BodyInner = styled.div`
`

const Body = styled(BodyBase).attrs(p => ({
  // Height is based on number of children, up to MAX_CHILDREN_VISIBLE, 
  // plus a search box added if specified.
  totalHeight: (Math.min(React.Children.count(p.children), (p.maxItems ? p.maxItems : MAX_CHILDREN_VISIBLE)) + (p.onSearch ? 1 : 0)) * 57 + 1,
  totalInnerHeight: Math.min(React.Children.count(p.children), (p.maxItems ? p.maxItems : MAX_CHILDREN_VISIBLE)) * 57 + 1
}))`
  position:       absolute;
  z-index:        100;
  box-sizing:     border-box;
  height:         1000px; /* We animate max-height based on child count. */
  overflow-y:     hidden;
  ${p => !p.inline && css`width: 100%;`}
  // Inline fill be placed over thick FieldWrapper's border.
  ${p => p.inline && css`left: -2px; right: -2px;`}

  /* Border is grey, unless error. */
  border:         solid ${p => p.inline ? 2 : 1}px ${p => p.theme.normalColor};
  border-radius:  ${p => p.theme.radius}px;

  /* Background is theme background */
  background:     ${p => p.theme.background};

  /* Dropbox can open upwards or downwards. This affects its
     positioning relative to the parent. */
  ${p => p.upwards && css`
    bottom: calc(100% - 1px);
    /* Box-shadow is only at top(spread = -1px). */
    box-shadow:     rgba(34, 36, 38, 0.2) 0 -2px 2px -1px;    
    ${!p.inline && css`
      border-bottom: none;
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;      
    `}
    ${p.inline && css`
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    `}
  `}
  ${p => !p.upwards && css`
    top: calc(100% - 1px);
    /* Box-shadow is only at bottom (spread = -1px). */
    box-shadow:     rgba(34, 36, 38, 0.2) 0 2px 2px -1px;
    ${!p.inline && css`
      border-top: none;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px; 
    `}
    ${p.inline && css`
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border-top: none;
    `}    
  `}

  /* Border color, max-height and opacity are transitioned 
     as Body opens and closes. */
  /* In a previous iteration, this worked with scaleY rather
     than max-height. It turns out that applying a transformation
     causes fractional pixel problems on its element. Since 
     Dropdown can be part of a flex, fractional pixels
     will occur. */
  transition: opacity ${p => p.theme.transition.duration*3}s ease-in-out, 
              max-height ${p => p.theme.transition.duration*3}s ease-out, 
              border-color ${p => p.theme.transition.duration*3}s ease-in-out;
  opacity: 0;
  max-height: 0;
  ${p => p.open && css`
    transition: opacity ${p => p.theme.transition.duration*3}s ease-in, 
                max-height ${p => p.theme.transition.duration*3}s ease-in, 
                border-color ${p => p.theme.transition.duration*3}s ease-in;
    border-color: ${p => lighten(0.25, p.theme.primaryColor)};
    opacity: 1;
    max-height: ${p.totalHeight}px;
  `}

  ${BodyInner} {
    overflow-x:     hidden;
    /* If there are more children than MAX_CHILDREN_VISIBLE, 
       then the body content scrolls vertically. */
    overflow-y:     ${p => (React.Children.count(p.children) > (p.maxItems ? p.maxItems : MAX_CHILDREN_VISIBLE)) ? 'scroll' : 'hidden'};
    height:         ${p => p.totalInnerHeight}px;
  }

  ${SearchBox} {
    box-sizing: border-box;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 10px;
    height: 56px;
    ${p => p.error && css`background: ${p.theme.errorColor.background};`}
  }
`;

export { Body }
