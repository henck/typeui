import * as React from 'react';
import type { Locale } from 'date-fns';
interface IProps {
    value: Date | string;
    locale?: Locale;
    /** A strict formatter does not use helpers like 'almost', 'over',
     * 'less than' and the like.
     */
    strict?: boolean;
}
interface IState {
    /**
     * The state timestamp is used to force the component
     * to rerender every second.
     */
    timestamp: number;
}
declare class DistanceDate extends React.Component<IProps, IState> {
    private interval;
    constructor(props: IProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    update: () => void;
    render(): React.JSX.Element;
}
export { DistanceDate };
