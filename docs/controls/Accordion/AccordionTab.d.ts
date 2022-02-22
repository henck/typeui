import * as React from 'react';
import { Float } from '../Types';
interface IAccordionTabProps {
    className?: string;
    children?: React.ReactNode;
    /** Tab title. Can be JSX. */
    title: React.ReactNode;
    /** If true, tab is hidden. */
    hidden?: boolean;
    /** Optional click event callback. */
    onClick?: () => void;
    styled?: boolean;
    active?: boolean;
    align?: Float;
    noanimate?: boolean;
}
declare class AccordionTab extends React.Component<IAccordionTabProps, {}> {
    render(): JSX.Element;
}
export { AccordionTab };
