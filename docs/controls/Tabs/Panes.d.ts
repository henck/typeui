import * as React from 'react';
interface IPanesProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    underlined?: boolean;
}
declare class PanesBase extends React.Component<IPanesProps> {
    render: () => JSX.Element;
}
declare const Panes: import("styled-components").StyledComponent<typeof PanesBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Panes };
