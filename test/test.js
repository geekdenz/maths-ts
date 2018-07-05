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
        it('basic operations work', function () {
            var a = new math.Vector([1, 2, 3]);
            var b = new math.Vector([3, 5, 7]);
            var c = new math.Vector([4, 7, 10]);
            var aMinusB = new math.Vector([-2, -3, -4]);
            expect(a.plus(b)).toEqual(c);
            expect(a.plus(b).equals(c)).toBe(true);
            expect(a.minus(b)).toEqual(aMinusB);
        });
    });
});
//# sourceMappingURL=test.js.map