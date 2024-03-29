import * as React from 'react';
interface IErrorProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * If true, error messages have more contrast for readability on a dark
     * background.
     * @default false
     */
    contrast?: boolean;
}
declare class ErrorBase extends React.Component<IErrorProps, {}> {
    render(): JSX.Element;
}
declare const Error: import("styled-components").StyledComponent<typeof ErrorBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Error };
