import * as styledComponents from "styled-components";
var _a = styledComponents, styled = _a.default, css = _a.css, createGlobalStyle = _a.createGlobalStyle, keyframes = _a.keyframes, ThemeProvider = _a.ThemeProvider;
var Theme = {
    background: '#fff',
    // Default font
    fontURL: "https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i&subset=latin",
    fontName: "Roboto",
    fontSize: 16,
    fontColor: "rgba(0, 0, 0, 0.77)",
    fontLineHeight: 24,
    // Headers
    headerBase: 1.75,
    heightRatio: 1.286,
    scaleRatio: "minorThird",
    // Scale
    scale: {
        button: 'minorThird',
        icon: 'goldenSection',
        label: 'minorThird'
    },
    // Color palette
    normalColor: "#e0e1e2",
    primaryColor: "#2185d0",
    secondaryColor: "#1b1c1d",
    positiveColor: "#21ba45",
    negativeColor: "#db2828",
    altTextColor: "#ffffff",
    infoColor: { color: "rgb(39, 111, 134)", background: "rgb(248, 255, 255)", border: "rgb(169, 213, 222)" },
    warningColor: { color: "rgb(87, 58, 8)", background: "rgb(255, 250, 243)", border: "rgb(201, 186, 155)" },
    successColor: { color: "rgb(44, 102, 45)", background: "rgb(252, 255, 245)", border: "rgb(163, 194, 147)" },
    errorColor: { color: "rgb(159, 58, 56)", background: "rgb(255, 246, 246)", border: "rgb(224, 180, 180)" },
    // Animations
    transition: {
        duration: 0.1
    },
    // Boxes
    radius: 4,
    darken: 0.05,
    gutter: 0.5,
    smallScreen: 576,
    mediumScreen: 768
};
export default styled;
export { Theme, styled, css, createGlobalStyle, keyframes, ThemeProvider };
