
// Currying

// Currying is the technique of writing a function so that it
// receives its arguments one at a time, returning a new function with each
// argument until it has received all its arguments and finally evaluates

// Curried functions are essential to functional composition. We often
// don't have all of the arguments a function needs up front. Currying
// means we can delay supplying an argument until it is available
// an necessary.

// Canonical Example - ES5
function add(x) {
  // x is stored in closure here and is available in the body of our
  // returned function awaitng the y value
  return function(y) {
    return x + y
  }
}

const addFive = add(5) // returns a function awaiting a second value
addFive(4) // 9
addFive(15) // 20
addFive(8) // 13

// const add = x => y => x + y
// const add10 = add(10)
// console.log(add10(5))

