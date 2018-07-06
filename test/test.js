"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require("expect");
var math = require("../index");
describe('maths-ts library', function () {
    describe('Vector', function () {
        it('should be a function', function () {
            expect(typeof math.Vector).toBe('function');
        });
        it('should return an object', function () {
            expect(typeof new math.Vector([])).toBe('object');
        });
        it('should return length of 3', function () {
            expect(new math.Vector([1, 2, 3]).length()).toBe(3);
        });
        it('basic operations (plus, minus, mult, dot) work', function () {
            var a = new math.Vector([1, 2, 3]);
            var b = new math.Vector([3, 5, 7]);
            var c = new math.Vector([4, 7, 10]);
            var d = 4;
            var aMinusB = new math.Vector([-2, -3, -4]);
            var aMultScalerD = new math.Vector([4, 8, 12]);
            var aDotB = 3 + 10 + 21;
            expect(a.plus(b)).toEqual(c);
            expect(a.plus(b).equals(c)).toBe(true);
            expect(a.minus(b)).toEqual(aMinusB);
            expect(a.mult(d)).toEqual(aMultScalerD);
            expect(a.dot(b).equals(aDotB)).toBe(true);
        });
    });
    describe('Matrix', function () {
        it('should do basic operations (plus, mult)', function () {
            var A = new math.Matrix([
                [2, 3],
                [4, 5]
            ]);
            var B = new math.Matrix([
                [3, 8],
                [-2, 3]
            ]);
            var APlusB = new math.Matrix([
                [5, 11],
                [2, 8]
            ]);
            var ATimes2 = new math.Matrix([
                [4, 6],
                [8, 10]
            ]);
            expect(A.plus(B)).toEqual(APlusB);
            expect(A.mult(2)).toEqual(ATimes2);
        });
    });
});
//# sourceMappingURL=test.js.map