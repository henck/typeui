import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IAccordionBodyProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /* (Not public) Is parent tab currently active? */
  active?: boolean;
  /* (Not public) A styled accordion adds basic formatting. */
  styled?: boolean;    
  /* (Not public) If set, there will be no sliding animations. */
  noanimate?: boolean;  
}

const AccordionBodyBase = (props: IAccordionBodyProps) => {
  const bodyRef = React.useRef<HTMLDivElement>(null);

  // Expand this element.
  // This is done in two steps: 
  // - First, height is set to 0.
  // - Then, repeatedly, height is increased until it reaches scrollHeight.
  // - At the end, height is set to auto and overflow to visible. This is
  //   to allow the AccordionBody to adjust its size when content is added to
  //   it or removed from it.
  const expand = () => {
    if(bodyRef.current == null) return;
    if(props.noanimate) {
      bodyRef.current.style.overflowY = "visible";
      bodyRef.current.style.height = "auto"; 
    } else {
      requestAnimationFrame(() => {
        bodyRef.current.style.height = "0px";
        expandMore();
      });
    }
  }
  const expandMore = () => {
    requestAnimationFrame(() => {
      bodyRef.current.style.height = Math.min(bodyRef.current.scrollHeight, bodyRef.current.clientHeight + 30) + 'px';
      if(bodyRef.current.clientHeight < bodyRef.current.scrollHeight) {
        expandMore();
      } else {
        bodyRef.current.style.height = "auto"; 
        bodyRef.current.style.overflowY = "visible";
      }
    });    
  }

  // Collapse this element.
  // This is done in two steps:
  // - First, height is set to scrollHeight.
  // - Then, repeatedly, height is descreased until it reaches 0.
  const collapse = () => {
    if(bodyRef.current == null) return;
    if(props.noanimate) {
      bodyRef.current.style.height = "0px";
      bodyRef.current.style.overflowY = "hidden";
    } else {
      requestAnimationFrame(() => {
        bodyRef.current.style.height = bodyRef.current.scrollHeight + "px";
        bodyRef.current.style.overflowY = "hidden";
        collapseMore();
      });
    }
  }
  const collapseMore = () => {
    requestAnimationFrame(() => {
      bodyRef.current.style.height = Math.max(0, bodyRef.current.clientHeight - 30) + 'px';
      if(bodyRef.current.clientHeight > 0) {
        collapseMore(); 
      }
    });
  }

  // Only expand/collape when active prop changes:
  React.useEffect(() => {
    // Must wait for DOM to be ready.
    setTimeout(() => {
      if(props.active) {
        expand();
      } else {
        collapse();
      }
    }, 10);
  }, [props.active]);

  return (
    <div className={props.className} ref={bodyRef}>
      <div>
        {props.children}
      </div>
    </div>
  );
}

const AccordionBody = styled(AccordionBodyBase)`
  box-sizing: border-box;
  height: ${p => p.active ? 'auto' : 0};
  overflow-y: hidden;

  & > div {
    padding: 4px 0 8px 0;
  }

  ${p => p.styled && css`
    & > div {
      padding: 8px 10px 12px 10px; 
    }
  `}  
`;

export { AccordionBody }
