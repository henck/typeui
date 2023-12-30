import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { Float, VerticalDirection } from '../Types';

// Other controls
import { AccordionTab } from './AccordionTab';

interface IAccordionProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Array of panel indices that are active (open) by default (0-based) */
  active?: number[];  
  /**
   * A styled accordion adds basic formatting. 
   * @default false
   */
  styled?: boolean;
  /**
   * Adds ab extra-strong dropshadow. Applies only to styled Accordions. 
   * @default false
   */
  raised?: boolean;  
  /** 
   * If set, the accordion can have multiple panels open at the same time. 
   * By default, an accordion only allows a single panel open at any time.
   * @default false
   */
  multiple?: boolean;
  /** 
   * Align caret icon to `left` or `right`. 
   * @default left
  */
  align?: Float;
  /** 
   * If set, there will be no sliding animations. 
   * @default false
   */
  noanimate?: boolean;
  /** Attached to `top`, `bottom` or nothing (both). */
  attached?: boolean | VerticalDirection;  
}

const AccordionBase = (props: IAccordionProps) => {
  // Currently open panels.
  // Take default active panels from props, or use [] if no active panels were 
  // specified.
  const [indices, setIndices] = React.useState<number[]>(props.active ?? []);

  const handleClick = (idx: number) => {
    if(props.multiple) {
      // Multiple tabs may be open.
      // If clicked tab not in indices, then add it.
      // Otherwise remove it.
      setIndices(
        indices.indexOf(idx) != -1 ?
        indices.filter(a => a != idx) :
        indices.concat([idx])
      );
    } else {
      // Only one tab may be open.
      // Set indices to be just the clicked tab.
      setIndices([idx]);
    }
  }

  /**
   * Clone Tab children, passing them active, styled and align properties
   * and making them clickable.
   */
  const getTabs = () => {
    return React.Children.map(props.children, (child:any, i) => {
      return React.cloneElement(child, {
        active: indices.indexOf(i) != -1,
        styled: props.styled,
        align: props.align,
        noanimate: props.noanimate,
        onClick: () => handleClick(i)
      })
    });    
  }

  return (
    <div className={props.className}>
      {getTabs()}
    </div>
  );
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
 * 
 * @example
 * <Accordion 
 *   styled raised multiple
 *   <Accordion.Tab title="What is a dog?">
 *     <p>A dog is a type of domesticated animal.</p>
 *   </Accordion.Tab>
 *   <Accordion.Tab title="What kinds of dogs are there?">
 *     <p>There are many breeds of dogs.</p>
 *   </Accordion.Tab>
 *   <Accordion.Tab title="How do you acquire a dog?">
 *     <p>From pet shops, private owners, or shelters.</p>
 *   </Accordion.Tab>
 * </Accordion> 
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-accordion--properties
 */
class Accordion extends React.Component<IAccordionProps, {}> {
  public static displayName = "Accordion";

  /**
   * Each accordion tab is an instance of Accordion.Tab.
   * 
   * @example
   * <Accordion.Tab title="What is a dog?">
   *   <p>A dog is a type of domesticated animal.</p>
   * </Accordion.Tab>
   */
  public static Tab = AccordionTab;

  render() {
    return (
      <AccordionStyled {...this.props}></AccordionStyled>
    );
  }
}

export { Accordion, AccordionTab }
