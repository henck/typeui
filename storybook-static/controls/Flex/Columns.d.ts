import * as React from 'react';
interface IColumnsProps {
    children?: React.ReactNode;
    count: number;
}
declare class Columns extends React.Component<IColumnsProps, {}> {
    render(): JSX.Element;
}
export { Columns };
