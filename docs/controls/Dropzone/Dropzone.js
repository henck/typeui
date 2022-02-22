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
import * as React from 'react';
// Other controls
import { Dropbox } from './Dropbox';
/**
 * A `Dropzone` accepts files, either by dragging them into the zone or by clicking the
 * zone and selection files. Multiple files may be dragged or selected at the same
 * time. When files are selected, Dropzone fires `onAddFiles` with a `Files[]` argument.
 *
 * @example
 * <Dropzone
 *   onAddFiles={(files: File[]) => console.log("Files dropped", files)}
 * />
 *
 * @link https://henck.github.io/typeui/?path=/story/controls-dropzone--properties
 */
var Dropzone = /** @class */ (function (_super) {
    __extends(Dropzone, _super);
    function Dropzone(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAddFiles = function (files) {
            _this.props.onAddFiles(files);
            _this.setState({ hover: false });
        };
        _this.handleDragOver = function () {
            _this.setState({ hover: true });
        };
        _this.handleDragLeave = function () {
            _this.setState({ hover: false });
        };
        _this.state = {
            hover: false
        };
        return _this;
    }
    Dropzone.prototype.render = function () {
        var p = this.props;
        return (React.createElement(Dropbox, { hover: this.state.hover, message: p.message, onDragover: this.handleDragOver, onDragLeave: this.handleDragLeave, onAddFiles: this.handleAddFiles }));
    };
    return Dropzone;
}(React.Component));
export { Dropzone };
