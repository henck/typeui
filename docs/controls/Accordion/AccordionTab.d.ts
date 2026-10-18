import * as React from 'react';
import { Float } from '../Types';
interface IAccordionTabProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    /** Tab title. Can be JSX. */
    title: React.ReactNode;
    /** If true, tab is hidden. */
    hidden?: boolean;
    /** Optional click event callback. */
    onClick?: () => void;
    /** @ignore (Not public) A styled accordion adds basic formatting. */
    styled?: boolean;
    /** @ignore (Not public) Is this tab currently active? */
    active?: boolean;
    /** @ignore (Not public) Align caret icon to `left` or `right`. Defaults to `left`. */
    align?: Float;
    /** @ignore (Not public) If set, there will be no sliding animations. */
    noanimate?: boolean;
}
declare const AccordionTab: (props: IAccordionTabProps) => React.JSX.Element;
export { AccordionTab, type IAccordionTabProps };
