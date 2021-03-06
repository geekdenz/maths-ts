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
    it('basic operations (plus, minus, mult, dot) work', () => {
      const a = new math.Vector([1,2,3])
      const b = new math.Vector([3,5,7])
      const c = new math.Vector([4,7,10])
      const d = 4
      const aMinusB = new math.Vector([-2,-3,-4])
      const aMultScalerD = new math.Vector([4,8,12])
      const aDotB = 3 + 10 + 21
      expect(a.plus(b)).toEqual(c)
      expect(a.plus(b).equals(c)).toBe(true)
      expect(a.minus(b)).toEqual(aMinusB)
      expect(a.mult(d)).toEqual(aMultScalerD)
      expect(a.dot(b).equals(aDotB)).toBe(true)
    })
  })
  describe('Matrix', () => {
    it('should do basic operations (plus, mult)', () => {
      const A = new math.Matrix([
        [2, 3],
        [4, 5]
      ])
      const B = new math.Matrix([
        [3, 8],
        [-2, 3]
      ])
      const APlusB = new math.Matrix([
        [5, 11],
        [2, 8]
      ])
      const ATimes2 = new math.Matrix([
        [4, 6],
        [8, 10]
      ])
      expect(A.plus(B)).toEqual(APlusB)
      expect(A.mult(2)).toEqual(ATimes2)
    })
  })
})
