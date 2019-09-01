import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Other controls
import { Icon } from '../Icon/Icon';
import { IconStyled } from '../Icon/Icon';

interface IProps {
  className?: string;
  children?: React.ReactNode;
  /** Label to show above value */
  label: string;
  /** If onClick is specified, then the label has a link appearance. */
  onClick?: () => void;
  /** Optional flex width */
  width?: number;
}

const Label = styled('div')`
  position: relative;
  font-weight: 500;
  font-size: 80%;
  margin-right: 1em;

  /* Ordinarily, labels are displayed above the field control: */
  display: block;
`

const Block = styled('div')`
  position: relative;
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 4px;
`

class LabelledValueBase extends React.Component<IProps, {}> {
  render() {
    let p = this.props;
    // Does the label have content?
    let hasContent = React.Children.count(p.children) != 0;

    return (
      <div className={p.className}>
        <Label>{p.label}</Label>
        <Block onClick={p.onClick}>
          {!hasContent ? '-' : p.children}&nbsp;
          {p.onClick && <Icon name="link"/>}
        </Block>
      </div>
    );
  }
}

const LabelledValueStyled = styled(LabelledValueBase)`
  padding-bottom: 8px;

  /* If the label is a link, then give it a pointer cursor, and hover color. */
  ${Block} {
    ${p => p.onClick && css`
      cursor: pointer;
      transition: background-color ${p => p.theme.transition.duration * 2}s ease,
                  color ${p => p.theme.transition.duration * 2}s ease;
      &:hover {
        color: #fff;
        svg {
          fill: #fff;
        }
        background-color: ${p.theme.primaryColor};
      }      
    `}
  } 

  ${IconStyled} {
    position: absolute;
    right: 6px;
    top: 2px;
  }
  
  /* Fields may provide their width in relative units to other fields. */
  ${p => p.width && css `flex: ${p.width}`}
`

class LabelledValue extends React.Component<IProps> {
  render() {
    return (
      <LabelledValueStyled {...this.props}></LabelledValueStyled>
    )
  }
}

export { LabelledValue };
