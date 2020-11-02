/* Higher Order Function 
1. Accetps a function as an argument
2. Returns a new function
*/

const withCount = fn => {
  let count = 0
  return (...args) => {
    console.log(`Call count: ${++count}`)
    return fn(...args)
  }
}

const add = (x,y) => x + y

const countAdd = withCount(add)
console.log(countAdd(1,2))
console.log(countAdd(2,2))
console.log(countAdd(3,2))