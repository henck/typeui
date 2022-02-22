import * as React from 'react';
interface IProps {
    value: Date | string;
    locale?: Locale;
}
declare class ShortDateTime extends React.Component<IProps, {}> {
    render(): JSX.Element;
}
export { ShortDateTime };
