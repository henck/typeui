import * as React from 'react';
interface ILoaderProps {
    className?: string;
}
declare class LoaderBase extends React.Component<ILoaderProps, {}> {
    render(): JSX.Element;
}
/**
 * A Loader projects a loading animation over the entire screen.
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-loader-types--loader
 */
declare const Loader: import("styled-components").StyledComponent<typeof LoaderBase, import("../../styles/Theme").IThemeInterface, {}, never>;
export { Loader };
