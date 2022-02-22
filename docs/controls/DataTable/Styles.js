var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from '../../styles/Theme';
var Body = styled('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n  overflow-y: scroll;\n"], ["\n  flex: 1;\n  overflow-y: scroll;\n"])));
var Table = styled('div')(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n  flex: 1;\n"], ["\n  position: relative;\n  flex: 1;\n"])));
var TableInner = styled('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;  \n"], ["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;  \n"])));
export { Body, Table, TableInner };
var templateObject_1, templateObject_2, templateObject_3;
