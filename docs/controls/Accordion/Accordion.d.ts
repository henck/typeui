import * as React from 'react';
import { Float, VerticalDirection } from '../Types';
import { AccordionTab } from './AccordionTab';
interface IAccordionProps {
    className?: string;
    children?: React.ReactNode;
    /** Array of panel indices that are active (open) by default (0-based) */
    active?: number[];
    /** A styled accordion adds basic formatting. */
    styled?: boolean;
    /** Adds ab extra-strong dropshadow. Applies only to styled Accordions. */
    raised?: boolean;
    /**
     * If set, the accordion can have multiple panels open at the same time.
     * By default, an accordion only allows a single panel open at any time.
     */
    multiple?: boolean;
    /** Align caret icon to `left` or `right` (defaults to `left`). */
    align?: Float;
    /** If set, there will be no sliding animations. */
    noanimate?: boolean;
    /** Attached to `top`, `bottom` or nothing (both). */
    attached?: boolean | VerticalDirection;
}
/**
 * An Accordion is used to group content in panes that can be expanded individually.
 * By default, an Accordion only allows one pane to be open at any time. A multiple
 * Accordion allows users to expand multiple panes.
 *
 * @example
 * <Accordion
 *   styled raised multiple
 *   <Accordion.Tab title="What is a dog?">
 *     <p>A dog is a type of domesticated animal.</p>
 *   </Accordion.Tab>
 *   <Accordion.Tab title="What kinds of dogs are there?">
 *     <p>There are many breeds of dogs.</p>
 *   </Accordion.Tab>
 *   <Accordion.Tab title="How do you acquire a dog?">
 *     <p>From pet shops, private owners, or shelters.</p>
 *   </Accordion.Tab>
 * </Accordion>
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-accordion--properties
 */
declare class Accordion extends React.Component<IAccordionProps, {}> {
    static displayName: string;
    /**
     * Each accordion tab is an instance of Accordion.Tab.
     *
     * @example
     * <Accordion.Tab title="What is a dog?">
     *   <p>A dog is a type of domesticated animal.</p>
     * </Accordion.Tab>
     */
    static Tab: typeof AccordionTab;
    render(): JSX.Element;
}
export { Accordion, AccordionTab };
