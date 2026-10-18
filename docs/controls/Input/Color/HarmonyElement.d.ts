import * as React from 'react';
interface IProps {
    /** @ignore */
    className?: string;
    color: string;
    onClick?: () => void;
}
declare const HarmonyElement: import("styled-components/dist/types").IStyledComponentBase<"web", IProps> & string & Omit<(props: IProps) => React.JSX.Element, keyof React.Component<any, {}, any>>;
export { HarmonyElement };
