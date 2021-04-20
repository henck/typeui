import * as React from 'react';
import styled from '../../styles/Theme';
import { css } from 'styled-components';

// Other controls
import { Icon } from '../Icon/Icon';
import { IconStyled } from '../Icon/Icon';
import { Hint } from '../Form/Hint';

interface IProps {
  className?: string;
  children?: React.ReactNode;
  /** Label to show above value */
  label: string;
  /** If onClick is specified, then the label has a link appearance. */
  onClick?: () => void;
  /** Optional flex width */
  width?: number;
  /** Remove backround */
  nobackground?: boolean;
  /** Optional hint text. Can be JSX. */
  hint?: React.ReactNode;
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
        {p.hint && <Hint>{p.hint}</Hint>}
      </div>
    );
  }
}

const LabelledValueStyled = styled(LabelledValueBase)`
  padding-bottom: 8px;

  /* If the label is a link, then give it a pointer cursor, and hover color. */
  ${Block} {
    position: relative;
    ${p => !p.nobackground && css`
      background: #f0f0f0;
      padding: 2px 8px;
      border-radius: ${p.theme.radius}px;
    `}

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

/**
 * Displays a value with a label above it. A LabelledValue is just that: a label and 
 * a value. It is used for view-only data. There is a very slight color change when the 
 * mouse hovers over the value.
 * 
 * @example
 * <LabelledValue label="My label">{value}</LabelledValue>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-labelledvalue--properties
 */
class LabelledValue extends React.Component<IProps> {
  render() {
    return (
      <LabelledValueStyled {...this.props}></LabelledValueStyled>
    )
  }
}

export { LabelledValue };
