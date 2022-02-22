import * as React from 'react';
interface IProps {
    value: Date | string;
    locale?: Locale;
}
declare class LongDate extends React.Component<IProps, {}> {
    render(): JSX.Element;
}
export { LongDate };
