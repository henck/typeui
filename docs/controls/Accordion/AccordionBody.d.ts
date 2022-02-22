import * as React from 'react';
interface IAccordionBodyProps {
    className?: string;
    children?: React.ReactNode;
    active?: boolean;
    styled?: boolean;
    noanimate?: boolean;
}
interface IState {
    open: boolean;
}
declare class AccordionBodyBase extends React.Component<IAccordionBodyProps, IState> {
    private bodyElement;
    constructor(props: IAccordionBodyProps);
    expand: () => void;
    expandMore: () => void;
    collapse: () => void;
    collapseMore: () => void;
    componentDidUpdate(prevProps: IAccordionBodyProps): void;
    render(): JSX.Element;
}
declare const AccordionBody: import("styled-components").StyledComponent<typeof AccordionBodyBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { AccordionBody };
