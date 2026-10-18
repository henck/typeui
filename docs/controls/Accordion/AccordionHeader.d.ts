import * as React from 'react';
import { Float } from '../Types';
interface IAccordionHeaderProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** Callback when header clicked. */
    onClick?: () => void;
    /** Is this header currently active? */
    active?: boolean;
    /** A styled accordion adds basic formatting. */
    styled?: boolean;
    /** Align caret icon to left or right. */
    align?: Float;
}
declare const AccordionHeader: import("styled-components/dist/types").IStyledComponentBase<"web", IAccordionHeaderProps> & string & Omit<(props: IAccordionHeaderProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { AccordionHeader };
