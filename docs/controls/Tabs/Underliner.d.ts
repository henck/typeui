import * as React from 'react';
interface IUnderlinerProps {
    className?: string;
    setRef?: any;
}
declare class UnderlinerBase extends React.Component<IUnderlinerProps> {
    render(): JSX.Element;
}
declare const Underliner: import("styled-components").StyledComponent<typeof UnderlinerBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Underliner };
