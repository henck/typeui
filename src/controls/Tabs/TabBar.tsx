import * as React from 'react';
import styled from '../../styles/Theme';

interface ITabBarProps {
  className?: string;
  children?: React.ReactNode;
}

class TabBarBase extends React.Component<ITabBarProps, {}> {
  render() {
    let p = this.props;
    return (
      <div className={p.className}>{p.children}</div>
    )
  }
}

/* Style the tabs bar. Its bottom border is erased by 
  * the active tab's bottom border. */
const TabBar = styled(TabBarBase)`
  display: block;
  position: relative;
  border-bottom: solid 1px rgba(35, 35, 35, 0.15);
  height: 40px;
  box-sizing: border-box;
  flex: 0;
`

TabBar.displayName = "Tabs.TabBar";

export { TabBar };