import * as React from 'react';
interface IErrorProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * If true, error messages have more contrast for readability on a dark
     * background.
     * @default false
     */
    contrast?: boolean;
}
declare const Error: import("styled-components/dist/types").IStyledComponentBase<"web", IErrorProps> & string & Omit<(props: IErrorProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { Error };
