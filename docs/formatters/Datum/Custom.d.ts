import * as React from 'react';
interface IProps {
    value: Date | string;
    format: string;
    locale?: Locale;
}
declare class Custom extends React.Component<IProps, {}> {
    render(): string;
}
export { Custom };
