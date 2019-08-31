import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IAccordionBodyProps {
  className?: string;
  children?: React.ReactNode;
  /* (Not public) Is parent tab currently active? */
  active?: boolean;
  /* (Not public) A styled accordion adds basic formatting. */
  styled?: boolean;    
}

interface IState {
  open: boolean;
}

class AccordionBodyBase extends React.Component<IAccordionBodyProps, IState> {
  private bodyElement: HTMLDivElement;

  constructor(props: IAccordionBodyProps) {
    super(props);
    this.state = {
      open: props.active
    };
  }

  // Expand this element.
  // This is done in two steps: 
  // - First, height is set to 0.
  // - Then, repeatedly, height is increased until it reaches scrollHeight.
  expand = () => {
    requestAnimationFrame(() => {
      this.bodyElement.style.height = "0px";
      this.expandMore();
    });
  }
  expandMore = () => {
    requestAnimationFrame(() => {
      this.bodyElement.style.height = Math.min(this.bodyElement.scrollHeight, this.bodyElement.clientHeight + 30) + 'px';
      if(this.bodyElement.clientHeight < this.bodyElement.scrollHeight) {
        this.expandMore();
      }
    });    
  }

  // Collapse this element.
  // This is done in two steps:
  // - First, height is set to scrollHeight.
  // - Then, repeatedly, height is descreased until it reaches 0.
  collapse = () => {
    requestAnimationFrame(() => {
      this.bodyElement.style.height = this.bodyElement.scrollHeight + "px";
      this.collapseMore();
    });
  }
  collapseMore = () => {
    requestAnimationFrame(() => {
      this.bodyElement.style.height = Math.max(0, this.bodyElement.clientHeight - 30) + 'px';
      if(this.bodyElement.clientHeight > 0) {
        this.collapseMore(); 
      }
    });
  }

  componentDidUpdate(prevProps: IAccordionBodyProps) {
    // Only expand/collape when active prop changes:
    if(this.props.active == prevProps.active) return;
    if(this.props.active) {
      this.expand(); 
    }
    else { 
      this.collapse();
    }
  }

  render() {
    let p = this.props;
    return (
      <div className={p.className} ref={(el:any) => this.bodyElement = el}>
        <div>
          {p.children}
        </div>
      </div>
    );
  }
}

const AccordionBody = styled(AccordionBodyBase)`
  box-sizing: border-box;
  height: ${p => p.active ? 'auto' : 0};
  overflow-y: hidden;

  &>div {
    padding: 4px 0 8px 0;
  }

  ${p => p.styled && css`
    &>div {
      padding: 8px 10px 12px 10px; 
    }
  `}  
`;

export { AccordionBody };