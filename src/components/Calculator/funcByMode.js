import { NEUTRAL, ADDITION, SUBSTARCTION, MULTIPLICATION, DIVISION } from '../../constants/modes'

const defaultFunc = (left, right) => (left)

export default (mode) => {
  switch(mode) {
    case NEUTRAL:
      return defaultFunc
    case ADDITION:
      return (left, right) => (left + right)
    case SUBSTARCTION:
      return (left, right) => (left - right)
    case MULTIPLICATION:
      return (left, right) => (left * right)
    case DIVISION:
      return (left, right) => (left / right)
    default:
      return defaultFunc
  }
}
