import * as React from 'react';
import { HorizontalAlignment } from '../Types';
interface ICardHeaderProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Optional text alignment to `left`, `center` or `right` (default is `left`).
     */
    align?: HorizontalAlignment;
}
declare const Header: (props: ICardHeaderProps) => React.JSX.Element;
export { Header, type ICardHeaderProps };
