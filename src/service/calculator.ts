import { OperationSign } from "../enums";
import { BinaryOp } from "../types";


// Move `operations` object to function that returns calc function
//
// Object is ok, but now we have exhaustive pattern matching which forces us to handle all operators
// including new ones, if we want to add it later
//
export const getCalcFunc = (operation: OperationSign): BinaryOp => {
  switch (operation) {
    case OperationSign.ADD:
      return (x, y) => x + y
    case OperationSign.SUB:
      return (x, y) => x - y
    case OperationSign.DIV:
      return (x, y) => x / y
    case OperationSign.MUL:
      return (x, y) => x * y
    case OperationSign.POW:
      return (x, y) => x ** y

    // Made for switch case exhaustiveness (https://www.youtube.com/watch?v=X_Y50ZNDO3c&list=LL&index=1&t=783s)
    // If we'll add new operator in enum we'll get typescript error here
    default:
      const _neverOp: never = operation
      return _neverOp
  }
}
