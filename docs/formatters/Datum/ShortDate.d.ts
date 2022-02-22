import * as React from 'react';
interface IProps {
    value: Date | string;
    locale?: Locale;
}
declare class ShortDate extends React.Component<IProps, {}> {
    render(): JSX.Element;
}
export { ShortDate };
