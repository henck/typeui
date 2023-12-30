import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Types
import { Float } from '../Types';

// Other controls
import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from './AccordionBody';

interface IAccordionTabProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** Tab title. Can be JSX. */
  title: React.ReactNode;
  /** If true, tab is hidden. */
  hidden?: boolean;
  /** Optional click event callback. */
  onClick?: () => void;  
  /** @ignore (Not public) A styled accordion adds basic formatting. */
  styled?: boolean;
  /** @ignore (Not public) Is this tab currently active? */
  active?: boolean;
  /** @ignore (Not public) Align caret icon to `left` or `right`. Defaults to `left`. */
  align?: Float;  
  /** @ignore (Not public) If set, there will be no sliding animations. */
  noanimate?: boolean;
}

const AccordionTabBase = (props: IAccordionTabProps) => 
  <div className={props.className}>
    <AccordionHeader styled={props.styled} align={props.align} active={props.active} onClick={props.onClick}>{props.title}</AccordionHeader>
    <AccordionBody styled={props.styled} active={props.active} noanimate={props.noanimate}>{props.children}</AccordionBody>
  </div>

const AccordionTabStyled = styled(AccordionTabBase)`
  ${p => p.styled && css`
    &:not(:first-child) {
      ${AccordionHeader} {
        border-top: solid 1px ${p.theme.normalColor};
      }
    }
  `}
`;

const AccordionTab = (props: IAccordionTabProps) => {
  // A hidden tab renders nothing.
  if(props.hidden) return null;
  return <AccordionTabStyled {...props}/>
}

export { AccordionTab, IAccordionTabProps }
