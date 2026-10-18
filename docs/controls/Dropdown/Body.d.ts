import * as React from 'react';
interface IBodyProps {
    /** @ignore */
    className?: string;
    /** @ignore */
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
declare const Body: import("styled-components/dist/types").IStyledComponentBase<"web", Omit<import("styled-components/dist/types").Merged<IBodyProps, {
    totalHeight?: number;
    totalInnerHeight?: number;
}>, "search" | "className" | "children" | "open" | "inline" | "error" | "upwards" | "maxItems" | "onSearch" | "totalHeight" | "totalInnerHeight"> & Partial<Pick<import("styled-components/dist/types").Merged<IBodyProps, {
    totalHeight?: number;
    totalInnerHeight?: number;
}>, "search" | "className" | "children" | "open" | "inline" | "error" | "upwards" | "maxItems" | "onSearch" | "totalHeight" | "totalInnerHeight">>> & string & Omit<(props: IBodyProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Body };
