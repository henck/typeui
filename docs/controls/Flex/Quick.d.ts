import * as React from 'react';
import { VerticalAlignment } from '../Types';
interface IQuickProps {
    /** @ignore */
    className?: string;
    children?: React.ReactNode;
    /**
     * Flex vertical alignment of \`top\`, \`center\` or \`bottom\`. By default,
     * 'center' is used.
     * @default center
     */
    align?: VerticalAlignment;
}
declare class Quick extends React.Component<IQuickProps, {}> {
    render: () => JSX.Element;
}
export { Quick };
