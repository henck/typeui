import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

// Other controls
import { Content } from './Content';
import { Header } from './Header';
import { Meta } from './Meta';
import { lighten } from '../../helper/lighten';

interface ICardProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * A `fluid` Card occupies all width available to it. 
   * @default false
   */
  fluid?: boolean;
  /** 
   * A `raised` Card will have an extra-strong dropshadow. 
   * @default false 
   */
  raised?: boolean;
  /** 
   * A Card can be clickable. If an event handler is set, then the Card will 
   * respond to mouse hover. 
   */
  onClick?: () => void;
}

const CardBase = (props: ICardProps) =>
  <div className={props.className} onClick={props.onClick}>{props.children}</div>

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
    transition: margin ${p.theme.transition.duration}s ease,
                box-shadow ${p.theme.transition.duration}s ease;
    &:hover {
      margin-top: 3px;
      margin-bottom: 12px;
      ${!p.raised && css`box-shadow: rgba(34, 36, 38, 0.3) 0px 2px 3px 0px;`}
      ${p.raised && css`box-shadow: rgba(34, 36, 38, 0.24) 0px 2px 4px 0px, rgba(34, 36, 38, 0.3) 0px 2px 10px 0px;`}
    }
  `}
`
/**
 * A Card groups information with an optional header and footer.
 * 
 * @example
 * <Card fluid onClick={() => ...)}>
 *   <Card.Header>Card header</Card.Header>
 *   <Card.Meta>Meta content</Card.Meta>
 *   <Card.Content>
 *     Main content of the Card goes into a Card.Content element.
 *   </Card.Content>
 *   <Card.Content secondary>
 *     Secondary content has the secondary attribute set.
 *   </Card.Content>    
 * </Card>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-card--properties
 */
class Card extends React.Component<ICardProps> {
  /** A Card can have a Card.Header element. */
  public static Header = Header;

  /** A Card can have a Card.Meta element. */
  public static Meta = Meta;

  /** A Card can have any number of Card.Content elements inside it. */
  public static Content = Content;

  render = () => <CardStyled {...this.props}></CardStyled>
}

export { Card }
