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
var Validator = /** @class */ (function () {
    function Validator() {
        var _this = this;
        this.getMessage = function () {
            return _this.message;
        };
    }
    return Validator;
}());
/**
 * Verify that field has a value.
 */
var RequiredValidator = /** @class */ (function (_super) {
    __extends(RequiredValidator, _super);
    function RequiredValidator(spec) {
        var _this = _super.call(this) || this;
        _this.message = spec;
        return _this;
    }
    RequiredValidator.prototype.isValid = function (value) {
        if (typeof value === 'boolean')
            return !!value;
        if (typeof value === 'string')
            return value.trim().length > 0;
        return false;
    };
    return RequiredValidator;
}(Validator));
/**
 * Verify that value is an integer number.
 */
var IntegerValidator = /** @class */ (function (_super) {
    __extends(IntegerValidator, _super);
    function IntegerValidator(spec) {
        var _this = _super.call(this) || this;
        _this.message = spec;
        return _this;
    }
    IntegerValidator.prototype.isValid = function (value) {
        if (!value)
            return null;
        var regex = /^[-+]?[0-9]+$/;
        return regex.test(value);
    };
    return IntegerValidator;
}(Validator));
/*
  * Verify that value is a floating-point number. The default floating
  * point separator is '.' Optionally a different separator can be
  * specified.
  */
var FloatValidator = /** @class */ (function (_super) {
    __extends(FloatValidator, _super);
    function FloatValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        _this.message = parts[parts.length - 1];
        _this.separator = '.';
        if (parts.length > 1)
            _this.separator = parts[0];
        return _this;
    }
    FloatValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        var regex = new RegExp("^[-+]?[0-9]+(\\".concat(this.separator, "[0-9]+)?$"));
        return regex.test(value);
    };
    return FloatValidator;
}(Validator));
/**
 * Verify that value has a minimum numerical value.
 */
var MinValidator = /** @class */ (function (_super) {
    __extends(MinValidator, _super);
    function MinValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        if (parts.length != 2)
            console.error("MinValidator needs 2 arguments.");
        _this.message = parts[1];
        _this.min = parts[0];
        return _this;
    }
    MinValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        return parseInt(value) >= this.min;
    };
    return MinValidator;
}(Validator));
/**
 * Verify that value has a maximum numerical value.
 */
var MaxValidator = /** @class */ (function (_super) {
    __extends(MaxValidator, _super);
    function MaxValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        if (parts.length != 2)
            console.error("MaxValidator needs 2 arguments.");
        _this.message = parts[1];
        _this.max = parts[0];
        return _this;
    }
    MaxValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        return parseInt(value) <= this.max;
    };
    return MaxValidator;
}(Validator));
/**
 * Verify that value falls in a numerical range (inclusive).
 */
var BetweenValidator = /** @class */ (function (_super) {
    __extends(BetweenValidator, _super);
    function BetweenValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        if (parts.length != 3)
            console.error("BetweenValidator needs 3 arguments.");
        _this.message = parts[2];
        _this.min = parts[0];
        _this.max = parts[1];
        return _this;
    }
    BetweenValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        var num = parseInt(value);
        return num >= this.min && num <= this.max;
    };
    return BetweenValidator;
}(Validator));
/**
 * Verify that value is a string of minimum length.
 */
var MinLengthValidator = /** @class */ (function (_super) {
    __extends(MinLengthValidator, _super);
    function MinLengthValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        if (parts.length != 2)
            console.error("MinLengthValidator needs 2 arguments.");
        _this.message = parts[1];
        _this.len = parts[0];
        return _this;
    }
    MinLengthValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at least {min} chars long.
        return value.length >= this.len;
    };
    return MinLengthValidator;
}(Validator));
/**
 * Verify that value is a string of maximum length.
 */
var MaxLengthValidator = /** @class */ (function (_super) {
    __extends(MaxLengthValidator, _super);
    function MaxLengthValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        if (parts.length != 2)
            console.error("MaxLengthValidator needs 2 arguments.");
        _this.message = parts[1];
        _this.len = parts[0];
        return _this;
    }
    MaxLengthValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at most {max} chars long.
        return value.length <= this.len;
    };
    return MaxLengthValidator;
}(Validator));
/**
 * Verify that value is a string of maximum length.
 */
var LengthBetweenValidator = /** @class */ (function (_super) {
    __extends(LengthBetweenValidator, _super);
    function LengthBetweenValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        if (parts.length != 3)
            console.error("LengthBetweenValidator needs 3 arguments.");
        _this.message = parts[2];
        _this.min = parts[0];
        _this.max = parts[1];
        return _this;
    }
    LengthBetweenValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        // Invalid if not a string.
        if (!(typeof value === "string"))
            return false;
        // Valid if at least {min} chars longs and at most {max} chars long.
        return value.length >= this.min && value.length <= this.max;
    };
    return LengthBetweenValidator;
}(Validator));
/**
 * Verify that value satisfies a pattern.
 */
var PatternValidator = /** @class */ (function (_super) {
    __extends(PatternValidator, _super);
    function PatternValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        if (parts.length != 2)
            console.error("PatternValidator needs 2 arguments.");
        _this.pattern = parts[0];
        _this.message = parts[1];
        return _this;
    }
    PatternValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        var regex = new RegExp(this.pattern);
        return regex.test(value);
    };
    return PatternValidator;
}(Validator));
/**
 * Verify that value does not satisfy a pattern.
 */
var NotPatternValidator = /** @class */ (function (_super) {
    __extends(NotPatternValidator, _super);
    function NotPatternValidator(spec) {
        var _this = _super.call(this) || this;
        var parts = spec.split('|');
        if (parts.length != 2)
            console.error("NotPatternValidator needs 2 arguments.");
        _this.pattern = parts[0];
        _this.message = parts[1];
        return _this;
    }
    NotPatternValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        var regex = new RegExp(this.pattern);
        return !regex.test(value);
    };
    return NotPatternValidator;
}(Validator));
/**
 * Verify that values is a valid email address.
 */
var EmailValidator = /** @class */ (function (_super) {
    __extends(EmailValidator, _super);
    function EmailValidator(spec) {
        var _this = _super.call(this) || this;
        _this.message = spec;
        return _this;
    }
    EmailValidator.prototype.isValid = function (value) {
        if (!value)
            return true;
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(String(value).toLowerCase());
    };
    return EmailValidator;
}(Validator));
export { Validator, RequiredValidator, IntegerValidator, FloatValidator, MinValidator, MaxValidator, BetweenValidator, MinLengthValidator, MaxLengthValidator, LengthBetweenValidator, PatternValidator, NotPatternValidator, EmailValidator };
