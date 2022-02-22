import * as React from 'react';
import { Float } from '../Types';
interface IAccordionHeaderProps {
    className?: string;
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
declare class AccordionHeaderBase extends React.Component<IAccordionHeaderProps, {}> {
    render(): JSX.Element;
}
declare const AccordionHeader: import("styled-components").StyledComponent<typeof AccordionHeaderBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { AccordionHeader };
