"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expect = require("expect");
var math = require("../index");
describe('Library', function () {
    describe('a library functionality', function () {
        it('should be a function', function () {
            expect(typeof math.Vector).toBe('function');
        });
        it('should return an object', function () {
            expect(typeof new math.Vector([])).toBe('object');
        });
        it('should return length of 3', function () {
            expect(new math.Vector([1, 2, 3]).length()).toBe(3);
        });
        it('add two vectors and equals works', function () {
            var a = new math.Vector([1, 2, 3]);
            var b = new math.Vector([3, 5, 7]);
            var c = new math.Vector([4, 7, 10]);
            expect(a.plus(b)).toEqual(c);
            expect(a.plus(b).equals(c)).toBe(true);
        });
    });
});
//# sourceMappingURL=test.js.map