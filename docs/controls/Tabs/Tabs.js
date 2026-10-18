import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import styled from '../../styles/Theme';
// Other controls
import { Pane } from './Pane';
import { Panes } from './Panes';
import { TabBar } from './TabBar';
class TabsBase extends React.PureComponent {
    constructor() {
        super(...arguments);
        // Initialize state. Default active tab is tab #0,
        // unless the active prop is passed.
        this.state = {
            index: this.props.active ? this.props.active : 0
        };
        this.tabClicked = (idx) => {
            this.setState({ index: idx });
            if (this.props.onTabChange) {
                this.props.onTabChange(idx);
            }
        };
    }
    //
    // Clone all the panes, marking the active one.
    // All panes are rendered, because they may contain controls
    // that must be in the DOM. Inactive panes are invisible.
    //
    getPanes() {
        return React.Children.map(this.props.children, (child, i) => {
            if (child == null)
                return null;
            return React.cloneElement(child, {
                active: i === this.state.index,
                nohiddenrender: this.props.nohiddenrender
            });
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
        return (_jsxs("div", { className: p.className, children: [_jsx(TabBar, { active: this.state.index, onTabClicked: this.tabClicked, underlined: p.underlined, children: p.children }), _jsx(Panes, { underlined: p.underlined, children: this.getPanes() })] }));
    }
}
const TabsStyled = styled(TabsBase) `
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
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
const Tabs = (props) => _jsx(TabsStyled, { ...props });
/**
 * A single tab pane.
 *
 * The Pane label can contain arbitrary content.
 * To get the content to vertically align properly, a Flex.Quick can help.
 */
Tabs.Pane = Pane;
export { Tabs };
