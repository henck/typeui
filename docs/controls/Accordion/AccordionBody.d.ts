import * as React from 'react';
interface IAccordionBodyProps {
    /** @ignore */
    className?: string;
    /** @ignore */
    children?: React.ReactNode;
    active?: boolean;
    styled?: boolean;
    noanimate?: boolean;
}
declare const AccordionBody: import("styled-components/dist/types").IStyledComponentBase<"web", IAccordionBodyProps> & string & Omit<(props: IAccordionBodyProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { AccordionBody };
