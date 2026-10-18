import * as React from 'react';
interface IFieldWrapperProps {
    className?: string;
    children?: React.ReactNode;
    width?: number;
    boxed?: boolean;
    error?: boolean;
}
declare const FieldWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", IFieldWrapperProps> & string & Omit<(props: IFieldWrapperProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { FieldWrapper };
