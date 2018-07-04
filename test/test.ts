import * as expect from 'expect';

import * as lib from '../index'

describe('Library', () => {
  describe('a library functionality', () => {
    it('should be a function', () => {
      expect(typeof lib.libraryFunction).toBe('function')
    })
    it('should return a string', () => {
      expect(typeof lib.libraryFunction('meta developer')).toBe('string')
    })
    it('should return "Hello meta developer, from TypeScript."', () => {
      expect(lib.libraryFunction('meta developer')).toBe('Hello meta developer, from TypeScript.')
    })
  })
})
