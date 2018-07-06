export interface Operation<T> {}
declare global {
  interface Number {
    plus: (other: number) => number
    minus: (other: number) => number
    mult: (other: number) => number
    div: (other: number) => number
    equals: (other: number) => boolean
  }
}
Number.prototype.plus = function(other: number): number {
  return this + other
}
Number.prototype.minus = function(other: number): number {
  return this - other
}
Number.prototype.mult = function(other: number): number {
  return this * other
}
Number.prototype.div = function(other: number): number {
  return this / other
}
Number.prototype.equals = function(other: number): boolean {
  return this === other
}
export interface Plus <T> extends Operation<T> {
  plus(other: T): T
}
export interface Minus <T> extends Operation<T> {
  minus(other: T): T
}
export interface Multiply <T> extends Operation<T> {
  mult(magnitudeScalar: number): T
}
export interface Dot <T> extends Operation<T> {
  dot(other: T): number
}
export interface Divide <T> extends Operation<T> {
  div(other: T): T
}
export interface BasicArithmetic <T> extends Plus<T>, Minus<T>, Multiply<T>, Divide<T> {}
export interface VectorArithmetic extends Plus<Vector>, Minus<Vector>, Multiply<Vector>, Dot<Vector> {}
export interface MatrixArithmetic extends Plus<Matrix>, Minus<Matrix>, Multiply<Matrix>, Dot<Matrix> {}

/*
export class Scalar implements BasicArithmetic<Scalar> {
  constructor(protected _value: number = 0) {}
  get value(): number {
    return this._value
  }
  set value(v: number) {
    this._value = v
  }
  plus(other: Scalar): Scalar {
    return new Scalar(this._value + other.value)
  }
  minus(other: Scalar): Scalar {
    return new Scalar(this._value - other.value)
  }
  mult(other: Scalar | number): Scalar {
    const n = other instanceof Scalar ? other.value : other
    return new Scalar(this._value * n)
  }
  div(other: Scalar): Scalar {
    return new Scalar(this._value / other.value)
  }
  equals(other: Scalar | number): boolean {
    const otherNumber = other instanceof Scalar ? other.value : other
    return this._value === otherNumber
  }
}
*/
// type Scalar = Number
export interface OperatorFunction<T> {
  (a: T, b: T): T
}
// export interface NumberOperatorFunction extends OperatorFunction<number> {}
export interface ScalerOperatorFunction extends OperatorFunction<number> {}
export interface VectorOperatorFunction extends OperatorFunction<Vector> {}

// export interface MatrixOperatorFunction extends OperatorFunction<Matrix> {}
// export interface TensorOperatorFunction extends VectorOperatorFunction, 
export class Vector implements VectorArithmetic {
  protected array: number[]
  constructor(numbers: number[]) {
      this.array = numbers
  }
  length(): number {
    return this.array.length
  }
  toArray(): number[] {
    return this.array
  }
  addDimension(n: number): void {
    this.array.push(n)
  }
  equals(other: Vector): boolean {
    return !this.array.some((e, i) => !e.equals(Number(other.toArray()[i])))
  }
  public map(other: Vector, func: ScalerOperatorFunction): Vector {
    const result = this.toArray().map((v, i) => func(v, other.toArray()[i]))
    return new Vector(result)
  }
  plus(other: Vector): Vector {
    return this.map(other, (a, b) => a.plus(b))
  }
  minus(other: Vector): Vector {
    return this.map(other, (a, b) => a.minus(b))
  }
  dot(other: Vector): number {
    return this.map(other, (a, b) =>
      a.mult(b)).array.reduce((a, s) => a.plus(s), 0)
  }
  mult(magnitude: number): Vector {
    return new Vector(this.array.map(component => component.mult(magnitude)))
  }
}

export class Matrix implements MatrixArithmetic {
  map(func: (scalar: number, row: number, col: number) => number): Matrix {
    const result = new Matrix(this.array)
    result.array = result.array.map((vector, i) => vector.map((scalar, j) => func(scalar, i, j)))
    return result
  }
  plus(other: Matrix): Matrix {
    return new Matrix(this.array.map((vector, i) => vector.map((scalar, j) => scalar + other.array[i][j])))
  }
  minus(other: Matrix): Matrix {
    throw new Error("Method not implemented.");
  }
  mult(magnitudeScalar: number): Matrix {
    return this.map((scalar) => scalar * magnitudeScalar)
  }
  dot(other: Matrix): number {
    throw new Error("Method not implemented.");
  }
  constructor(protected array: number[][]) {}
}