import * as React from 'react';
import styled from '../../styles/Theme';
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
  private tabRef: HTMLDivElement;
  private underlinerRef: HTMLDivElement;

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

  // A Tab child uses callback refs to set the ref to the 
  // current tab. When using callback refs, the ref is the 
  // actual DOM element (not a Ref).
  private setTabRef(ref: HTMLDivElement) {
    this.tabRef = ref;
  }

  // The underliner child uses callback refs to set the ref to the 
  // current tab. When using callback refs, the ref is the 
  // actual DOM element (not a Ref).  
  private setUnderlinerRef(ref: HTMLDivElement) {
    this.underlinerRef = ref;
  }

  // Use refs to move underliner under active tab.
  private moveUnderliner() {
    if(!this.tabRef) return;
    let { offsetLeft, offsetWidth } = this.tabRef;
    if(this.underlinerRef) {
      this.underlinerRef.style.left = `${offsetLeft}px`;
      this.underlinerRef.style.width = `${offsetWidth}px`;
    }
  }

  componentDidMount() {
    // Use refs to tabs to move underliner to initial position.
    if(!this.props.underlined) return;
    this.moveUnderliner();
  }

  componentDidUpdate(prevProps:ITabsProps) {
    // Use refs to tabs to move underliner to new position.
    if(!prevProps.underlined) return;
    this.moveUnderliner();
  }

  // 
  // For each Pane, create a Tab.
  // 
  getTabs() {
    // Go through panes:
    return React.Children.map(this.props.children, (child, i) => {
      // Callback refs are used to get ref to current tab.
      let ref = i === this.state.index ? this.setTabRef.bind(this) : null;
      return (<Tab 
        setRef={ref} 
        active={i === this.state.index} 
        underlined={this.props.underlined} 
        onClick={this.tabClicked.bind(this, i)}>
        {(child as any).props.label}
      </Tab>)
    });
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

    // The underliner element only appears for underlined tabs.
    const underliner = p.underlined ? <Underliner setRef={this.setUnderlinerRef.bind(this)}></Underliner> : null;
    
    // - Render tabbar with tabs; state.index determines which one is active.
    //   Tabs is resonsible for rendering the tabs.
    // - Render body. The Tab children are responsible for rendering the body.
    //   Active tab gets props.active, tabs hide body as necessary.

    // Note that React refs are gathered for the active tab and the optional underliner element.
    // These are used for animation.
    return (
      <div className={p.className}>
        <TabBar>
          {this.getTabs()}
        </TabBar>
        {underliner}
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

export { Tabs };