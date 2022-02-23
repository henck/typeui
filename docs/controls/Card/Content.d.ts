import * as React from 'react';
import { HorizontalAlignment } from '../Types';
interface IContentProps {
    /** @ignore */
    className?: string;
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
declare class Content extends React.Component<IContentProps> {
    render: () => JSX.Element;
}
export { Content };
