import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IDividerProps {
  /** @ignore */
  className?: string;
  children?: React.ReactNode;
  /** 
   * A fitted Divider has no space above or below it. 
   * @default false 
   */
  fitted?: boolean;
  /** 
   * A hidden Divider divides content without a dividing line. 
   * @default false 
   */
  hidden?: boolean;
  /** 
   * A section Divider creates more margin between blocks of content. 
   * @default false
   */
  section?: boolean;
}

class DividerBase extends React.PureComponent<IDividerProps> {
  render = () => <div className={this.props.className}><span>{this.props.children}</span></div>
}

const DividerStyled = styled(DividerBase)`
  position: relative; /* For internal <span> positioning */
  box-sizing: border-box;
  font-weight: 500;

  /* A divider always clears content above it. */
  clear: both;

  /* Margin:
     A fitted divider has no vertical margin. 
     A section divider has double vertical margin.*/
  ${p => p.fitted && css`margin: 0;`}
  ${p => !p.fitted && !p.section && css`margin: 14px 0;`}
  ${p => !p.fitted &&  p.section && css`margin: 28px 0;`}

  /* Border:
     A hidden divider has no dividing line. */
  border-top: solid 1px ${p => p.hidden ? p.theme.background : p.theme.normalColor};

  /* A <span> is used to center the <Divider>'s content
     vertically. */
  & > span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 0 16px;
    background: #fff;
  }

  /* Any elements contained in the <Divider> get their
     vertical margins removed to vertically center 
     them properly.
     An example would be a <Header> contained in te
     <Divider>. */
  & span * {
    margin-top: 0;
    margin-bottom: 0;
  }
`

/**
 * A Divider is used to separate blocks of contents vertically. Dividers 
 * can be invisible or contain a horizontal line. Dividers can also contain 
 * content.
 * 
 * @example
 * <Divider>OR</Divider>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-divider--properties
 */
class Divider extends React.PureComponent<IDividerProps> {
  render = () => <DividerStyled {...this.props}></DividerStyled>
}

export { Divider };
