import * as React from 'react';
interface IBodyProps {
    className?: string;
    children?: React.ReactNode;
    open: boolean;
    error: boolean;
    /** A Dropdown can open upwards, which affects its styles. */
    upwards: boolean;
    /** Is Dropdown inline? */
    inline?: boolean;
    /** Max visible items before a scrollbar is added. Defaults to 6. */
    maxItems?: number;
    /** Search callback (optional) */
    onSearch?: (q: string) => void;
    /** Current search value */
    search?: string;
}
declare class BodyBase extends React.Component<IBodyProps, {}> {
    render(): JSX.Element;
}
declare const Body: import("styled-components").StyledComponent<typeof BodyBase, import("../../styles/Theme").IThemeInterface, {
    totalHeight: number;
    totalInnerHeight: number;
}, "totalHeight" | "totalInnerHeight">;
export { Body };
