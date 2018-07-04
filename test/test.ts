import * as expect from 'expect';

import * as math from '../index'

describe('Library', () => {
  describe('a library functionality', () => {
    it('should be a function', () => {
      expect(typeof math.Vector).toBe('function')
    })
    it('should return an object', () => {
      expect(typeof new math.Vector([])).toBe('object')
    })
    it('should return length of 3', () => {
      expect(new math.Vector([1,2,3]).length()).toBe(3)
    })
    it('add two vectors and equals works', () => {
      const a = new math.Vector([1,2,3])
      const b = new math.Vector([3,5,7])
      const c = new math.Vector([4,7,10])
      expect(a.plus(b)).toEqual(c)
      expect(a.plus(b).equals(c)).toBe(true)
    })
  })
})
