import * as React from 'react';
import { VerticalAlignment } from '../Types';
interface IQuickProps {
    className?: string;
    children?: React.ReactNode;
    /** Flex vertical alignment of \`top\`, \`center\` or \`bottom\`. By default, 'center' is used. */
    align?: VerticalAlignment;
}
declare class Quick extends React.Component<IQuickProps, {}> {
    render(): JSX.Element;
}
export { Quick };
