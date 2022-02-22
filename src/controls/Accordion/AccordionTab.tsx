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

class AccordionTabBase extends React.Component<IAccordionTabProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <AccordionHeader styled={p.styled} align={p.align} active={p.active} onClick={this.props.onClick}>{p.title}</AccordionHeader>
        <AccordionBody styled={p.styled} active={p.active} noanimate={p.noanimate}>{p.children}</AccordionBody>
      </div>
    );
  }
}

const AccordionTabStyled = styled(AccordionTabBase)`
  ${p => p.styled && css`
    &:not(:first-child) {
      ${AccordionHeader} {
        border-top: solid 1px ${p.theme.normalColor};
      }
    }
  `}
`;

class AccordionTab extends React.Component<IAccordionTabProps, {}> {
  render() {
    let p = this.props;
    return (
      p.hidden ? null : <AccordionTabStyled {...p}/>
    )
  }  
}

export { AccordionTab };