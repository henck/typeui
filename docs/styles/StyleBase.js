var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Theme } from './Theme';
import { css, createGlobalStyle } from 'styled-components';
var base = css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  @import url(", ");\n  \n  body {\n    font-family: ", ", sans-serif;\n    color: ", ";\n    font-size: ", "px;\n    line-height: ", "px;\n  } \n\n  p {\n    margin: 0 0 4px 0;\n  }\n\n  b, strong {\n    font-weight: 500;\n  }\n\n  i, em {\n    font-style: italic;\n  }\n\n  small, sub, sup { font-size: .83em; }\n  sub             { vertical-align: sub; }\n  sup             { vertical-align: super; }\n\n  code {\n    font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", \"Consolas\", \"source-code-pro\", monospace;\n    background-color: #555;\n    color: #fff;\n    border-radius: 3px;\n    padding: 0px 4px 1px 4px;\n    transition: background-color 0.1s ease;\n    &:hover {\n      background-color: #666;\n    }\n  }\n\n  pre {\n    font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", \"Consolas\", \"source-code-pro\", monospace;\n    background-color: #555;\n    color: #fff;\n    border-radius: 3px;\n    padding: 8px 16px;\n    overflow-x: hidden;\n  }\n"], ["\n  @import url(", ");\n  \n  body {\n    font-family: ", ", sans-serif;\n    color: ", ";\n    font-size: ", "px;\n    line-height: ", "px;\n  } \n\n  p {\n    margin: 0 0 4px 0;\n  }\n\n  b, strong {\n    font-weight: 500;\n  }\n\n  i, em {\n    font-style: italic;\n  }\n\n  small, sub, sup { font-size: .83em; }\n  sub             { vertical-align: sub; }\n  sup             { vertical-align: super; }\n\n  code {\n    font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", \"Consolas\", \"source-code-pro\", monospace;\n    background-color: #555;\n    color: #fff;\n    border-radius: 3px;\n    padding: 0px 4px 1px 4px;\n    transition: background-color 0.1s ease;\n    &:hover {\n      background-color: #666;\n    }\n  }\n\n  pre {\n    font-family: \"Monaco\", \"Menlo\", \"Ubuntu Mono\", \"Consolas\", \"source-code-pro\", monospace;\n    background-color: #555;\n    color: #fff;\n    border-radius: 3px;\n    padding: 8px 16px;\n    overflow-x: hidden;\n  }\n"])), Theme.fontURL, Theme.fontName, Theme.fontColor, Theme.fontSize, Theme.fontLineHeight);
var StyleBase = createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), base);
export { StyleBase };
var templateObject_1, templateObject_2;
