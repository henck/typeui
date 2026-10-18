import baseStyled, { css, createGlobalStyle, keyframes, ThemeProvider } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
// styled-components v6 forwards all props to DOM elements. Restore the v4
// behavior: DOM elements only receive valid HTML attributes, while wrapped
// React components receive all props.
const shouldForwardProp = (prop, target) => typeof target === 'string' ? isPropValid(prop) : true;
const styled = new Proxy(baseStyled, {
    apply: (target, thisArg, args) => target(...args).withConfig({ shouldForwardProp }),
    // styled.div etc. are own function properties; route them through apply.
    get: (target, prop, receiver) => typeof prop === 'string' && Object.prototype.hasOwnProperty.call(target, prop) && typeof target[prop] === 'function'
        ? styled(prop)
        : Reflect.get(target, prop, receiver)
});
const Theme = {
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
