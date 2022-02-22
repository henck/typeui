var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import { css } from 'styled-components';
import styled from '../../styles/Theme';
var DropboxBase = /** @class */ (function (_super) {
    __extends(DropboxBase, _super);
    function DropboxBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Dropzone is clicked.
        _this.handleClick = function () {
            _this.inputElement.click();
        };
        _this.handleAddFile = function (e) {
            var list = e.target.files;
            var arr = _this.fileListToArray(list);
            _this.props.onAddFiles(arr);
        };
        _this.handleDragOver = function (e) {
            e.preventDefault();
            _this.props.onDragover();
        };
        _this.handleDragLeave = function (e) {
            _this.props.onDragLeave();
        };
        _this.handleDrop = function (e) {
            e.preventDefault();
            var files = e.dataTransfer.files;
            var array = _this.fileListToArray(files);
            _this.props.onAddFiles(array);
        };
        return _this;
    }
    DropboxBase.prototype.fileListToArray = function (list) {
        var array = [];
        for (var i = 0; i < list.length; i++) {
            array.push(list.item(i));
        }
        return array;
    };
    DropboxBase.prototype.render = function () {
        var _this = this;
        var p = this.props;
        return (React.createElement("div", { className: p.className, onClick: this.handleClick, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop },
            React.createElement("div", null, p.message ? p.message : "Drop a file here to upload, or click to select."),
            React.createElement("svg", null,
                React.createElement("use", { xlinkHref: "spritemap.svg#cloud-upload" })),
            React.createElement("input", { ref: function (el) { return _this.inputElement = el; }, type: "file", multiple: true, onChange: this.handleAddFile })));
    };
    return DropboxBase;
}(React.Component));
var Dropbox = styled(DropboxBase)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative; /* For internal <span> positioning */\n  border: dashed 2px #aaa;\n  ", "\n  border-radius: ", "px;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n\n  ", "\n\n  div {\n    margin-top: 8px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  svg {\n    display: block;\n    margin: 8px;\n    width: 100%;\n    height: 150px;\n    fill: ", ";\n  }\n\n  input {\n    display: none;\n  }\n"], ["\n  position: relative; /* For internal <span> positioning */\n  border: dashed 2px #aaa;\n  ", "\n  border-radius: ", "px;\n  cursor: pointer;\n  width: 100%;\n  text-align: center;\n\n  ", "\n\n  div {\n    margin-top: 8px;\n    font-weight: 500;\n    color: ", ";\n  }\n\n  svg {\n    display: block;\n    margin: 8px;\n    width: 100%;\n    height: 150px;\n    fill: ", ";\n  }\n\n  input {\n    display: none;\n  }\n"])), function (p) { return p.hover && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["border: solid 2px #fff;"], ["border: solid 2px #fff;"]))); }, function (p) { return p.theme.radius; }, function (p) { return p.hover && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    background: ", ";\n  "], ["\n    background: ", ";\n  "])), p.theme.primaryColor); }, function (p) { return p.hover ? '#fff' : p.theme.fontColor; }, function (p) { return p.hover ? '#fff' : '#888'; });
export { Dropbox };
var templateObject_1, templateObject_2, templateObject_3;
