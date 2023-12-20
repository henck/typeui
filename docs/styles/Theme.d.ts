import * as styledComponents from "styled-components";
import { Ratio } from "../helper/SizeHelper";
declare const styled: styledComponents.ThemedStyledInterface<IThemeInterface>, css: styledComponents.ThemedCssFunction<IThemeInterface>, createGlobalStyle: <P extends object = {}>(first: TemplateStringsArray | styledComponents.CSSObject | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, IThemeInterface>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, IThemeInterface>>[]) => styledComponents.GlobalStyleComponent<P, IThemeInterface>, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, ThemeProvider: styledComponents.ThemeProviderComponent<IThemeInterface, IThemeInterface>;
export interface IScaleGroup {
    button: Ratio;
    icon: Ratio;
    label: Ratio;
}
export interface IColorGroup {
    color: string;
    background: string;
    border: string;
}
export interface ITransitionGroup {
    duration: number;
}
export interface IThemeInterface {
    readonly background: string;
    readonly fontURL: string;
    readonly fontName: string;
    readonly fontSize: number;
    readonly fontColor: string;
    readonly fontLineHeight: number;
    readonly headerBase: number;
    readonly heightRatio: number;
    readonly scaleRatio: Ratio;
    readonly scale: IScaleGroup;
    readonly normalColor: string;
    readonly primaryColor: string;
    readonly secondaryColor: string;
    readonly positiveColor: string;
    readonly negativeColor: string;
    readonly altTextColor: string;
    readonly infoColor: IColorGroup;
    readonly warningColor: IColorGroup;
    readonly successColor: IColorGroup;
    readonly errorColor: IColorGroup;
    readonly transition: ITransitionGroup;
    readonly radius: number;
    readonly darken: number;
    readonly gutter: number;
    readonly smallScreen: number;
    readonly mediumScreen: number;
}
declare const Theme: IThemeInterface;
export default styled;
export { Theme, styled, css, createGlobalStyle, keyframes, ThemeProvider };
