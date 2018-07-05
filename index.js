"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scalar = /** @class */ (function () {
    function Scalar(_value) {
        if (_value === void 0) { _value = 0; }
        this._value = _value;
    }
    Object.defineProperty(Scalar.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = v;
        },
        enumerable: true,
        configurable: true
    });
    Scalar.prototype.plus = function (other) {
        return new Scalar(this._value + other.value);
    };
    Scalar.prototype.minus = function (other) {
        return new Scalar(this._value - other.value);
    };
    Scalar.prototype.mult = function (other) {
        var n = other instanceof Scalar ? other.value : other;
        return new Scalar(this._value * n);
    };
    Scalar.prototype.div = function (other) {
        return new Scalar(this._value / other.value);
    };
    Scalar.prototype.equals = function (other) {
        var otherNumber = other instanceof Scalar ? other.value : other;
        return this._value === otherNumber;
    };
    return Scalar;
}());
exports.Scalar = Scalar;
// export interface MatrixOperatorFunction extends OperatorFunction<Matrix> {}
// export interface TensorOperatorFunction extends VectorOperatorFunction, 
var Vector = /** @class */ (function () {
    function Vector(numbers) {
        if (numbers === void 0) { numbers = []; }
        if (numbers.length && numbers[0] instanceof Scalar) {
            this.array = numbers;
        }
        else {
            this.array = numbers.map(function (n) { return new Scalar(n); });
        }
    }
    Vector.prototype.length = function () {
        return this.array.length;
    };
    Vector.prototype.toArray = function () {
        return this.array;
    };
    Vector.prototype.addDimension = function (n) {
        this.array.push(n);
    };
    Vector.prototype.equals = function (other) {
        return !this.array.some(function (e, i) { return !e.equals(other.toArray()[i]); });
    };
    Vector.prototype.map = function (other, func) {
        var result = this.toArray().map(function (v, i) { return func(v, other.toArray()[i]); });
        return new Vector(result);
    };
    Vector.prototype.plus = function (other) {
        return this.map(other, function (a, b) { return a.plus(b); });
    };
    Vector.prototype.minus = function (other) {
        return this.map(other, function (a, b) { return a.minus(b); });
    };
    Vector.prototype.dot = function (other) {
        return this.map(other, function (a, b) { return a.mult(b); }).array.reduce(function (a, s) { return a.plus(s); }, new Scalar(0));
    };
    Vector.prototype.mult = function (magnitude) {
        return new Vector(this.array.map(function (component) { return component.mult(magnitude); }));
    };
    return Vector;
}());
exports.Vector = Vector;
var Tensor = /** @class */ (function (_super) {
    __extends(Tensor, _super);
    function Tensor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tensor;
}(Vector));
exports.Tensor = Tensor;
var Matrix = /** @class */ (function () {
    function Matrix() {
    }
    return Matrix;
}());
exports.Matrix = Matrix;
//# sourceMappingURL=index.js.map