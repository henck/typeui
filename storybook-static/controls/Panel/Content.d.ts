import * as React from 'react';
interface IContentProps {
    className?: string;
    children?: React.ReactNode;
}
declare class Content extends React.Component<IContentProps, {}> {
    render(): JSX.Element;
}
export { Content };
