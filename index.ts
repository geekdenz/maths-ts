export interface Operation<T> {}
export interface Plus <T> extends Operation<T> {
  plus(other: T): T
}
export interface Minus <T> extends Operation<T> {
  minus(other: T): T
}
export interface Multiply <T> extends Operation<T> {
  mult(magnitudeScalar: Scalar | number): T
}
export interface Dot <T> extends Operation<T> {
  dot(other: T): Scalar | number
}
export interface Divide <T> extends Operation<T> {
  div(other: T): T
}
export interface BasicArithmetic <T> extends Plus<T>, Minus<T>, Multiply<T>, Divide<T> {}
export interface VectorArithmetic extends Plus<Vector>, Minus<Vector>, Multiply<Vector>, Dot<Vector> {}
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
export interface OperatorFunction<T> {
  (a: T, b: T): T
}
export interface NumberOperatorFunction extends OperatorFunction<number> {}
export interface ScalerOperatorFunction extends OperatorFunction<Scalar> {}
export interface VectorOperatorFunction extends OperatorFunction<Vector> {}

// export interface MatrixOperatorFunction extends OperatorFunction<Matrix> {}
// export interface TensorOperatorFunction extends VectorOperatorFunction, 
export class Vector implements VectorArithmetic {
  protected array: Scalar[]
  constructor(numbers: number[] | Scalar[] = []) {
    if (numbers.length && numbers[0] instanceof Scalar) {
      this.array = <Scalar[]> numbers
    } else {
      this.array = (<number[]> numbers).map(n => new Scalar(n))
    }
  }
  length(): number {
    return this.array.length
  }
  toArray(): Scalar[] {
    return this.array
  }
  addDimension(n: Scalar): void {
    this.array.push(n)
  }
  equals(other: Vector): boolean {
    return !this.array.some((e, i) => !e.equals(other.toArray()[i]))
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
  dot(other: Vector): Scalar {
    return this.map(other, (a, b) => a.mult(b)).array.reduce((a, s) => a.plus(s), new Scalar(0))
  }
  mult(magnitude: Scalar | number): Vector {
    return new Vector(this.array.map(component => component.mult(magnitude)))
  }
}

export class Tensor extends Vector {

}

export class Matrix {

}