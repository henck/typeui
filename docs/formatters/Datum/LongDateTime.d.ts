import * as React from 'react';
import type { Locale } from 'date-fns';
interface IProps {
    value: Date | string;
    locale?: Locale;
}
declare class LongDateTime extends React.Component<IProps, {}> {
    render(): React.JSX.Element;
}
export { LongDateTime };
