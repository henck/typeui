import * as React from 'react';
interface IClearProps {
    /** @ignore */
    className?: string;
    onClick: () => void;
}
declare class ClearBase extends React.Component<IClearProps> {
    handleClick: (e: React.MouseEvent) => void;
    render: () => JSX.Element;
}
declare const Clear: import("styled-components").StyledComponent<typeof ClearBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Clear };
