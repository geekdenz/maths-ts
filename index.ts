export interface Operation<T> {}
export interface Plus <T> extends Operation<T> {
  plus(other: T): T
}
export interface Minus <T> extends Operation<T> {
  minus(other: T): T
}
export interface Multiply <T> extends Operation<T> {
  mult(other: T): T
}
export interface Divide <T> extends Operation<T> {
  div(other: T): T
}
export interface BasicArithmetic <T> extends Plus<T>, Minus<T>, Multiply<T>, Divide<T> {}
export interface VectorArithmetic extends Plus<Vector>, Minus<Vector>, Multiply<Vector> {}
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
  mult(other: Scalar): Scalar {
    return new Scalar(this._value * other.value)
  }
  div(other: Scalar): Scalar {
    return new Scalar(this._value / other.value)
  }
  equals(other: Scalar): boolean {
    return this._value === other.value
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
  mult(other: Vector): Vector {
    return this.map(other, (a, b) => a.mult(b))
  }
}

export class Tensor extends Vector {

}

export class Matrix {

}