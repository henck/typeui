import * as React from 'react';
import { HorizontalAlignment } from '../Types';
interface ICardContentProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /**
     * Optional text alignment to `left`, `center` or `right` (default is `left`).
     */
    align?: HorizontalAlignment;
    /**
     * Secondary card content has a dark background.
     * @default false
     */
    secondary?: boolean;
}
declare const Content: (props: ICardContentProps) => React.JSX.Element;
export { Content, type ICardContentProps };
