"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Number.prototype.plus = function (other) {
    return this + other;
};
Number.prototype.minus = function (other) {
    return this - other;
};
Number.prototype.mult = function (other) {
    return this * other;
};
Number.prototype.div = function (other) {
    return this / other;
};
Number.prototype.equals = function (other) {
    return this === other;
};
// export interface MatrixOperatorFunction extends OperatorFunction<Matrix> {}
// export interface TensorOperatorFunction extends VectorOperatorFunction, 
var Vector = /** @class */ (function () {
    function Vector(numbers) {
        this.array = numbers;
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
        return !this.array.some(function (e, i) { return !e.equals(Number(other.toArray()[i])); });
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
        return this.map(other, function (a, b) {
            return a.mult(b);
        }).array.reduce(function (a, s) { return a.plus(s); }, 0);
    };
    Vector.prototype.mult = function (magnitude) {
        return new Vector(this.array.map(function (component) { return component.mult(magnitude); }));
    };
    return Vector;
}());
exports.Vector = Vector;
var Matrix = /** @class */ (function () {
    function Matrix(array) {
        this.array = array;
    }
    Matrix.prototype.map = function (func) {
        var result = new Matrix(this.array);
        result.array = result.array.map(function (vector, i) { return vector.map(function (scalar, j) { return func(scalar, i, j); }); });
        return result;
    };
    Matrix.prototype.plus = function (other) {
        return new Matrix(this.array.map(function (vector, i) { return vector.map(function (scalar, j) { return scalar + other.array[i][j]; }); }));
    };
    Matrix.prototype.minus = function (other) {
        throw new Error("Method not implemented.");
    };
    Matrix.prototype.mult = function (magnitudeScalar) {
        return this.map(function (scalar) { return scalar * magnitudeScalar; });
    };
    Matrix.prototype.dot = function (other) {
        throw new Error("Method not implemented.");
    };
    return Matrix;
}());
exports.Matrix = Matrix;
//# sourceMappingURL=index.js.map