import { NEUTRAL } from '../../constants/modes'

export default (state, value) => {
  if (state.displayValue === "0") {
    return value
  }
  if(state.mode !== NEUTRAL && state.rightValue === 0) {
    return value
  }
  const newValue = `${state.displayValue}${value}`
  if (newValue.length > 10){
    return state.displayValue
  }
  return newValue
}
