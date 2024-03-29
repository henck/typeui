import * as React from 'react';
import { Pane } from './Pane';
interface ITabsProps {
    /** @ignore */
    className?: string;
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
declare class Tabs extends React.PureComponent<ITabsProps> {
    /**
     * A single tab pane.
     *
     * The Pane label can contain arbitrary content.
     * To get the content to vertically align properly, a Flex.Quick can help.
     */
    static Pane: typeof Pane;
    render: () => JSX.Element;
}
export { Tabs };
