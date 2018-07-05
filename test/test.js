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
});
//# sourceMappingURL=test.js.map