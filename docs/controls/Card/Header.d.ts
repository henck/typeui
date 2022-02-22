import * as React from 'react';
import { HorizontalAlignment } from '../Types';
interface IHeaderProps {
    className?: string;
    children?: React.ReactNode;
    /** Optional text alignment to `left`, `center` or `right` (default is `left`). */
    align?: HorizontalAlignment;
}
declare class Header extends React.Component<IHeaderProps, {}> {
    render(): JSX.Element;
}
export { Header };
