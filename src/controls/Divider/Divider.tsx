import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';

interface IDividerProps {
  className?: string;
  children?: React.ReactNode;
  /** A fitted Divider has no space above or below it. */
  fitted?: boolean;
  /** A hidden Divider divides content without a dividing line. */
  hidden?: boolean;
  /** A section Divider creates more margin between blocks of content. */
  section?: boolean;
}

class DividerBase extends React.PureComponent<IDividerProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>
        <span>{p.children}</span>
      </div>
    );
  }
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
  ${p => !p.hidden && css`
    border-top: solid 1px rgba(34, 36, 38, 0.15);
  `}
  ${p => p.hidden && css`
    border-top: solid 1px #fff;
  `}

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

// Storybook won't find properties if we don't create a component.
class Divider extends React.PureComponent<IDividerProps, {}> {
  public static displayName = 'Divider';

  render() {
    return (
      <DividerStyled {...this.props}></DividerStyled>
    );
  }
}

export { Divider };
