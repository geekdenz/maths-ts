import * as expect from 'expect';

import * as math from '../index'

describe('maths-ts library', () => {
  describe('Vector', () => {
    it('should be a function', () => {
      expect(typeof math.Vector).toBe('function')
    })
    it('should return an object', () => {
      expect(typeof new math.Vector([])).toBe('object')
    })
    it('should return length of 3', () => {
      expect(new math.Vector([1,2,3]).length()).toBe(3)
    })
    it('basic operations work', () => {
      const a = new math.Vector([1,2,3])
      const b = new math.Vector([3,5,7])
      const c = new math.Vector([4,7,10])
      const aMinusB = new math.Vector([-2,-3,-4])
      expect(a.plus(b)).toEqual(c)
      expect(a.plus(b).equals(c)).toBe(true)
      expect(a.minus(b)).toEqual(aMinusB)
    })
  })
})
