export const lastCharIsOperator = (input) => {
  const operators = ['+', '-', '*', '/']
  return operators.some((operator) => operator === input[input.length - 1])
}

export const lastCharIsDecimal = (input) => {
  return input[input.length - 1] === '.'
}