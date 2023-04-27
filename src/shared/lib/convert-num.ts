export const convertNum = (num: number) => {
  return num % 10 === 0 ? num.toString() : num.toFixed(2).toString()
}
