"use strict";
exports.__esModule = true;
var expect = require("expect");
var lib = require("../index");
describe('Library', function () {
    describe('a library functionality', function () {
        it('should be a function', function () {
            expect(typeof lib.libraryFunction).toBe('function');
        });
        it('should return a string', function () {
            expect(typeof lib.libraryFunction('meta developer')).toBe('string');
        });
        it('should return "Hello meta developer, from TypeScript."', function () {
            expect(lib.libraryFunction('meta developer')).toBe('Hello meta developer, from TypeScript.');
        });
    });
});
//# sourceMappingURL=test.js.map