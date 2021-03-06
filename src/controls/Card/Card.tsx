import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Other controls
import { Content } from './Content';
import { Header } from './Header';
import { Meta } from './Meta';
import { lighten } from '../../helper/lighten';

interface ICardProps {
  className?: string;
  children?: React.ReactNode;
  /** A fluid card occupies all width available to it. */
  fluid?: boolean;
  /** A raised card will have an extra-strong dropshadow. */
  raised?: boolean;
  /** A card can be clickable. If an event handler is set, then the card will respond to mouse hover. */
  onClick?: () => void;
}

class CardBase extends React.Component<ICardProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className} onClick={p.onClick}>
        {p.children}
      </div>
    );
  }
}

const CardStyled = styled(CardBase)`
  display: inline-block;
  flex: 1;
  position: relative;
  width: ${p => p.fluid ? '100%' : '292px'};
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 16px;

  text-align: left; /* Undo parent text-align */
  overflow: hidden; /* Make child elements follow card's rounded corners */
  
  /* Colors */
  background: ${p => lighten(0.05, p.theme.background)};
  border: solid 1px ${p => p.theme.normalColor};
  border-radius: ${p => p.theme.radius}px;
  ${p => !p.raised && css`box-shadow: rgba(34, 36, 38, 0.15) 0px 1px 2px 0px;`}
  ${p => p.raised && css`box-shadow: rgba(34, 36, 38, 0.12) 0px 2px 4px 0px, rgba(34, 36, 38, 0.15) 0px 2px 10px 0px;`}

  ${p => p.onClick && css`
    cursor: pointer;
    transition: margin ${p => p.theme.transition.duration}s ease,
                box-shadow ${p => p.theme.transition.duration}s ease;
    &:hover {
      margin-top: 3px;
      margin-bottom: 12px;
      ${p => !p.raised && css`box-shadow: rgba(34, 36, 38, 0.3) 0px 2px 3px 0px;`}
      ${p => p.raised && css`box-shadow: rgba(34, 36, 38, 0.24) 0px 2px 4px 0px, rgba(34, 36, 38, 0.3) 0px 2px 10px 0px;`}
    }
  `}
`

class Card extends React.Component<ICardProps, {}> {
  public static displayName = 'Card';
  public static Header = Header;
  public static Meta = Meta;
  public static Content = Content;

  render() {
    return (
      <CardStyled {...this.props}></CardStyled>
    );
  }
}

(Card.Header as any).displayName = "Card.Header";
(Card.Meta as any).displayName = "Card.Meta";
(Card.Content as any).displayName = "Card.Content";

export { Card };
