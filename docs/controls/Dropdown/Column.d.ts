import * as React from 'react';
import { Float } from '../Types';
interface IColumnProps {
    /** @ignore */
    className?: string;
    children: (item: any) => void;
    /**
     * Column weight. Defaults to 1.
     * @default 1
     */
    weight?: number;
    /**
     * Text alignment to the \`left\` or \`right\`. Defaults to `left`.
     * @default left
     */
    align?: Float;
}
declare class Column extends React.Component<IColumnProps> {
}
export { Column };
