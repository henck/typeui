import * as React from 'react';
import styled from '../../styles/Theme';

// Other controls
import { Pane } from './Pane';
import { Panes } from './Panes';
import { TabBar } from './TabBar';
import { Tab } from './Tab';
import { Underliner } from './Underliner';

interface ITabsProps {
  className?: string;
  children?: React.ReactNode;
  /** Underline the current tab (animated). */
  underlined?: boolean;
  /** Index of active tab by default (0-based) */
  active?: number;
  /* Method to call when active tab changes. */
  onTabChange?: (idx: number) => void;
}

interface ITabsState {
  /** Currently active tab (0-based) */
  readonly index: number;
}

class TabsBase extends React.PureComponent<ITabsProps, ITabsState> {
  // Initialize state. Default active tab is tab #0,
  // unless the active prop is passed.
  readonly state: ITabsState = {
    index: this.props.active ? this.props.active : 0
  }

  readonly tabClicked = (idx: number) => {
    this.setState((state, props) => ({
      index: idx
    }));
    if(this.props.onTabChange) {
      this.props.onTabChange(idx);
    }
  }

  //
  // Clone all the panes, marking the active one.
  // All panes are rendered, because they may contain controls
  // that must be in the DOM. Inactive panes are invisible.
  //
  getPanes() {
    return React.Children.map(this.props.children, (child:any, i) => {
      return React.cloneElement(child, {
        active: i === this.state.index
      })
    });
  }

  render() {
    let p = this.props;

    // - Render tabbar with tabs; state.index determines which one is active.
    //   Tabs is resonsible for rendering the tabs.
    // - Render body. The Tab children are responsible for rendering the body.
    //   Active tab gets props.active, tabs hide body as necessary.

    // Note that React refs are gathered for the active tab and the optional underliner element.
    // These are used for animation.
    return (
      <div className={p.className}>
        <TabBar active={this.state.index} onTabClicked={this.tabClicked} underlined={p.underlined}>
          {p.children}
        </TabBar>
        <Panes underlined={p.underlined}>
          {this.getPanes()}
        </Panes>
      </div>
    )
  }
}

const TabsStyled = styled(TabsBase)`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`

//
// Wrap Tabs styled component to we can add static fields to it.
//
class Tabs extends React.PureComponent<ITabsProps, {}> {
  public static displayName = "Tabs";
  public static Pane = Pane;
  render() {
    let p = this.props;
    return (
      <TabsStyled {...p}></TabsStyled>
    )
  }
}

(Tabs.Pane as any).displayName = "Tabs.Pane";

export { Tabs };