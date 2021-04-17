import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { Float, VerticalDirection } from '../Types';

// Other controls
import { AccordionTab } from './AccordionTab';

interface IAccordionProps {
  className?: string;
  children?: React.ReactNode;
  /** Array of panel indices that are active (open) by default (0-based) */
  active?: number[];  
  /** A styled accordion adds basic formatting. */
  styled?: boolean;
  /** Adds ab extra-strong dropshadow. Applies only to styled Accordions. */
  raised?: boolean;  
  /** 
   * If set, the accordion can have multiple panels open at the same time. 
   * By default, an accordion only allows a single panel open at any time.
   */
  multiple?: boolean;
  /** Align caret icon to `left` or `right` (defaults to `left`). */
  align?: Float;
  /** If set, there will be no sliding animations. */
  noanimate?: boolean;
  /** Attached to `top`, `bottom` or nothing (both). */
  attached?: boolean | VerticalDirection;  
}

interface IAccordionState {
  // Currently open panels.
  indices: number[];
}

class AccordionBase extends React.Component<IAccordionProps, IAccordionState> {
  constructor(props: IAccordionProps) {
    super(props);

    // Take default active panels from props, or use [] is
    // no active panels were specified.
    this.state = {
      indices: this.props.active ? this.props.active : []
    }
  }

  private handleClick = (idx: number) => {
    if(this.props.multiple) {
      // Multiple tabs may be open.
      // If clicked tab not in indices, then add it.
      // Otherwise remove it.
      this.setState((prev) => {
        return {
          indices: prev.indices.indexOf(idx) != -1 ?
                   prev.indices.filter(a => a != idx) :
                   prev.indices.concat([idx])
      };})
    } else {
      // Only one tab may be open.
      // Set indices to be just the clicked tab.
      this.setState({
        indices: [idx]
      })
    }
  }

  /**
   * Clone Tab children, passing them active, styled and align properties
   * and making them clickable.
   */
  private getTabs = () => {
    return React.Children.map(this.props.children, (child:any, i) => {
      return React.cloneElement(child, {
        active: this.state.indices.indexOf(i) != -1,
        styled: this.props.styled,
        align: this.props.align,
        noanimate: this.props.noanimate,
        onClick: () => this.handleClick(i)
      })
    });    
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        {this.getTabs()}
      </div>
    );
  }
}

const AccordionStyled = styled(AccordionBase)`
  display: block;

  /* Margin:
     Attached accordions have no margin, except bottom-attached. */
  ${p => (!p.attached || p.attached == 'bottom') && css`margin-bottom: 1em;`}

  /* Styled has borders. */
  ${p => p.styled && css`
    /* Shadow: only unattached segments have a dropshadow. */
    ${!p.attached && css`box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;`}
    /* A raised (and unattached) Accordion gets an extra deep shadow. */
    ${p.raised && !p.attached && css`box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;`}

    /* Attachment and border: */
    border-color: ${p.theme.normalColor};
    border-style: solid;
    border-left-width: 1px;
    border-right-width: 1px;

    /* Not attached: normal border. */
    ${!p.attached && css`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-radius: ${p.theme.radius}px;
    `}
    /* Middle attached: Only bottom border. */
    ${p.attached && p.attached !== 'top' && p.attached !== 'bottom' && css`
      border-bottom-width: 1px;
      border-radius: none;
    `}      
    /* Top attached: Top and bottom border. */
    ${p.attached === 'top' && css`
      border-top-width: 1px;
      border-bottom-width: 1px;
      border-top-left-radius: ${p.theme.radius}px;
      border-top-right-radius: ${p.theme.radius}px;
    `}
    /* Botom attached: Only bottom border. */
    ${p.attached === 'bottom' && css`
      border-bottom-width: 1px;
      border-bottom-left-radius: ${p.theme.radius}px;
      border-bottom-right-radius: ${p.theme.radius}px;
    `}  
  `}
`;

/**
 * An Accordion is used to group content in panes that can be expanded individually. 
 * By default, an Accordion only allows one pane to be open at any time. A multiple 
 * Accordion allows users to expand multiple panes. 
 */
class Accordion extends React.Component<IAccordionProps, {}> {
  public static displayName = "Accordion";
  public static Tab = AccordionTab;

  render() {
    let p = this.props;
    return (
      <AccordionStyled {...p}></AccordionStyled>
    );
  }
}

(Accordion.Tab as any).displayName = "Accordion.Tab";

export { Accordion, AccordionTab };
