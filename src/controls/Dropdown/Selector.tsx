import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Helpers
import { lighten } from '../../helper/lighten';

interface ISelectorProps {
  className?: string;
  children?: React.ReactNode;
  onClick: any;
  onClear?: any;
  /** Is the Dropdown currently open? */
  open: boolean;
  /** A Dropbox can open upwards, which affects its styles. */
  upwards: boolean;
  /** Is the Dropdown displayed inline, i.e. without a border? */
  inline?: boolean;
  /** Is this label a placeholder? Then it will be lighter in color. */
  placeholder?: boolean;
  /** Error state? */
  error?: boolean;
  /** Multiple selection? This will result in smaller padding to accommodate <Selection> items. */
  multiple?: boolean;
}

class SelectorBase extends React.Component<ISelectorProps, {}> {
  private handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if(this.props.onClear) this.props.onClear();
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className} onClick={p.onClick}>
        <span>
          {p.children}
        </span>
        <svg><use xlinkHref={"spritemap.svg#caret-down"}></use></svg>
        <svg onClick={this.handleClear}><use xlinkHref={"spritemap.svg#times"}></use></svg>
      </div>
    )
  }  
}

const Selector = styled(SelectorBase)`
  position:        relative;
  display:         block;
  box-sizing:      border-box;
  width:           100%;
  cursor:          pointer;
  background:      #fff;

  &>span {
    display: block;
    width: 100%;
    overflow-x: hidden;
    white-space: nowrap;
    /* Add ellipsis to selection text */
    ${p => !p.multiple && css`text-overflow: ellipsis;`}
  }

  /* Inline Dropdowns have no border, but normal Dropdowns do. */
  ${p => !p.inline && css`
    border:         solid 1px ${p.theme.normalColor};
    border-radius:  ${p => p.theme.radius}px;
    line-height:    17px;
    padding:        9px 30px 9px 14px;
    ${p.multiple && !p.placeholder && css`padding: 7px 30px 7px 14px;`}
    min-height:     17px;
    ${p.error && !p.open && css`
      background:   ${p.theme.errorColor.background};
      border-color: ${p.theme.errorColor.border};
    `}
  `}

  /* Placeholder labels will be light in color: */
  ${p => p.placeholder && css`
    color: ${p => lighten(0.6, p.theme.fontColor)};  
  `}

  /* When in error state, color text. */
  ${p => p.error && !p.open && css`
    color: ${p.theme.errorColor.color};
  `}
  
  /* When the Dropdown is open, the selector's bottom edge 
     (or top edge, for upwards) is colored white. */
  transition: border-color ${p => p.theme.transition.duration*3}s ease-in-out, 
              border-radius ${p => p.theme.transition.duration*3}s ease-in-out,
              color ${p => p.theme.transition.duration*3}s ease-in-out,
              background-color ${p => p.theme.transition.duration*3}s ease-in-out;
  ${p => p.open && !p.inline && css`
    border-color: ${p => lighten(0.25, p.theme.primaryColor)};
    border-${p.upwards ? 'top' : 'bottom'}-color: #fff;
    border-${p.upwards ? 'top' : 'bottom'}-left-radius: 0px;
    border-${p.upwards ? 'top' : 'bottom'}-right-radius: 0px;
  `}

  /* Icon size and positions: */
  & > svg {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
    width: 17px;
    height: 17px;
    margin-left: 0.5em;
    ${p => p.inline && css `margin-right: 1em`}
  }

  /* Caret icon is only shown when there is an onClear callback. */
  & > svg:nth-of-type(1) {
    display: ${p => p.onClear ? 'none' : 'block'};
  }
  /* Clear icon is only shown when there is an onClear callback. */
  & > svg:nth-of-type(2) {
    fill: #888;
    display: ${p => p.onClear ? 'block' : 'none'};
    &:hover {
      fill: ${p => p.theme.fontColor};
    }
  }
`;

export { Selector };