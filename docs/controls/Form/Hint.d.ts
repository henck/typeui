import * as React from 'react';
interface IFormHintProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
}
declare class HintBase extends React.Component<IFormHintProps, {}> {
    render: () => JSX.Element;
}
declare const Hint: import("styled-components").StyledComponent<typeof HintBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Hint };
