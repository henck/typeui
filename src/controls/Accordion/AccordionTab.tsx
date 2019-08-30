import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
import { AccordionHeader } from './AccordionHeader';
import { AccordionBody } from './AccordionBody';
import { Float } from '../Types';

interface IAccordionTabProps {
  className?: string;
  children?: React.ReactNode;
  /** Tab title. Can be JSX. */
  title: React.ReactNode;
  /** A styled accordion adds basic formatting. */
  styled?: boolean;
  active?: boolean;
  onClick?: () => void;
  /** Align caret icon to left or right. */
  align?: Float;  
}

class AccordionTabBase extends React.Component<IAccordionTabProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <AccordionHeader styled={p.styled} align={p.align} active={p.active} onClick={this.props.onClick}>{p.title}</AccordionHeader>
        <AccordionBody styled={p.styled} active={p.active}>{p.children}</AccordionBody>
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
      <AccordionTabStyled {...p}/>
    )
  }  
}

export { AccordionTab };