import * as React from 'react';
import styled from '../../styles/Theme';

// Other controls
import { Pane } from './Pane';
import { Panes } from './Panes';
import { TabBar } from './TabBar';

interface ITabsProps {
  /** @ignore */
  className?: string;
  /** @ignore */
  children?: React.ReactNode;
  /** 
   * Underline the current tab (animated). 
   * @default false
   */
  underlined?: boolean;
  /** 
   * If set, hidden panes are not rendered. 
   * @default false
   */
  nohiddenrender?: boolean;
  /** 
   * Index of active tab by default (0-based) 
   */
  active?: number;
  /**
   * Method to call when active tab changes. 
   */
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
    this.setState({ index: idx });
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
      if(child == null) return null;
      return React.cloneElement(child, {
        active: i === this.state.index,
        nohiddenrender: this.props.nohiddenrender
      })
    });
  }

  render() {
    let p = this.props;

    // - Render tabbar with tabs; state.index determines which one is active.
    //   TabBar is resonsible for rendering the tabs.
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

/**
 * Collection of tabs.
 * 
 * @example
 * <Tabs>
 *   <Tabs.Pane label="One">
 *     Content for first tab.
 *   </Tabs.Pane>
 *   <Tabs.Pane label="Two">
 *     Content for second tab.
 *   </Tabs.Pane>
 *   <Tabs.Pane label="Three">
 *     Content for third tab.
 *   </Tabs.Pane>
 * </Tabs>
 * 
 * @link https://henck.github.io/typeui/?path=/story/controls-tabs--properties
 */
class Tabs extends React.PureComponent<ITabsProps> {
  /** 
   * A single tab pane. 
   * 
   * The Pane label can contain arbitrary content.
   * To get the content to vertically align properly, a Flex.Quick can help.
   */
  public static Pane = Pane;

  render = () => <TabsStyled {...this.props}></TabsStyled>
}

export { Tabs };