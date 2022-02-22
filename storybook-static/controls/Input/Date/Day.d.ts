import * as React from 'react';
interface IDayProps {
    className?: string;
    grey: boolean;
    selected: boolean;
    today: boolean;
    day: number;
    onClick?: any;
}
declare class DayBase extends React.Component<IDayProps, {}> {
    render(): JSX.Element;
}
declare const Day: import("styled-components").StyledComponent<typeof DayBase, import("../../../styles/Theme").IThemeInterface, {}, never>;
export { Day };
