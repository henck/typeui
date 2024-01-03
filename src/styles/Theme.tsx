import * as React from 'react';
import * as styledComponents from "styled-components";
import { Ratio, modularScale } from "../helper/SizeHelper";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export interface IScaleGroup {
  button: Ratio;          // ModularScale ratio to use for buttons
  icon: Ratio;            // ModularScale ratio to use for icons
  label: Ratio;           // ModularScale ratio to use for labels
}

export interface IColorGroup {
  color: string;
  background: string;
  border: string;
}

export interface ITransitionGroup {
  duration: number;       // Transition duration in seconds
}

export interface IThemeInterface {
  readonly background:      string;

  // Default font
  readonly fontURL:         string;
  readonly fontName:        string;
  readonly fontSize:        number; // px
  readonly fontColor:       string; 
  readonly fontLineHeight:  number; // px

  // Headers
  readonly headerBase:      number; // Ratio of h1/default font size
  readonly heightRatio:     number; // Ratio of line-height/font-size
  readonly scaleRatio:      Ratio;  // Ratio for scaling headers. 

  // Scale
  readonly scale:           IScaleGroup;

  // Color palette
  readonly normalColor:     string; // Used for lines, button background
  readonly primaryColor:    string; 
  readonly secondaryColor:  string;
  readonly positiveColor:   string;
  readonly negativeColor:   string;

  readonly infoColor:       IColorGroup;
  readonly warningColor:    IColorGroup;
  readonly successColor:    IColorGroup;
  readonly errorColor:      IColorGroup;
  
  // Transitions
  readonly transition:      ITransitionGroup;

  // Boxes:
  readonly radius:          number;

  readonly darken:          number;

  readonly gutter:          number; // em
  readonly smallScreen:     number; // px
  readonly mediumScreen:    number; // px
}

const Theme: IThemeInterface = {
  background:      '#fff',
  
  // Default font
  fontURL:         "https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i&subset=latin",
  fontName:        "Roboto",
  fontSize:        16,
  fontColor:       "rgba(0, 0, 0, 0.77)",
  fontLineHeight:  24,

  // Headers
  headerBase:      1.75,
  heightRatio:     1.286,
  scaleRatio:      "minorThird",

  // Scale
  scale: {
    button: 'minorThird',
    icon:   'goldenSection',
    label:  'minorThird'
  },
  
  // Color palette
  normalColor:     "#e0e1e2",
  primaryColor:    "#2185d0",
  secondaryColor:  "#1b1c1d",
  positiveColor:   "#21ba45",
  negativeColor:   "#db2828",

  infoColor:       { color: "rgb(39, 111, 134)", background: "rgb(248, 255, 255)", border: "rgb(169, 213, 222)" },
  warningColor:    { color: "rgb(87, 58, 8)",    background: "rgb(255, 250, 243)", border: "rgb(201, 186, 155)" },
  successColor:    { color: "rgb(44, 102, 45)",  background: "rgb(252, 255, 245)", border: "rgb(163, 194, 147)" },
  errorColor:      { color: "rgb(159, 58, 56)",  background: "rgb(255, 246, 246)", border: "rgb(224, 180, 180)" },

  // Animations
  transition: {
    duration: 0.1
  },
  
  // Boxes
  radius:          4,
  
  darken: 0.05,
  gutter: 0.5,
  smallScreen: 576,
  mediumScreen: 768
};

export default styled;
export { Theme, styled, css, createGlobalStyle, keyframes, ThemeProvider };
