import * as React from 'react';
interface IProps {
    value: Date | string;
    seconds?: boolean;
}
declare class Time extends React.Component<IProps, {}> {
    render(): JSX.Element;
}
export { Time };
