import * as React from 'react';
import type { Locale } from 'date-fns';
interface IProps {
    value: Date | string;
    format: string;
    locale?: Locale;
}
declare class Custom extends React.Component<IProps, {}> {
    render(): string;
}
export { Custom };
