// Argument Order in Curried Functions

/* 
example 1
Partialy applied map function is not very useful. It has data but pending instructions.
*/
const map = xs => fn => xs.map(fn)

const arr1 = [1, 2, 3, 4, 5]
const double = num => num * 2

const arr1withMap = map(arr1)
const arr1Doubles = arr1withMap(double) // [2, 4, 6, 8, 10]


/* 
example 2 
Swap the order of arguments. Partially applied function can be applied to any list of numbers.
*/

const map2 = fn => xs => xs.map(fn)

const listDoubler = map(double)

listDoubler(arr1) // [2, 4, 6, 8, 10]
listDoubler([3, 4, 8]) // [6, 8, 16]
listDoubler([1, -1, 0]) // [2, -2, 0]

/* 
example 3 
Function picks a value out of an object based on a key
*/


const pick = key => obj => obj[key]
const pickName = pick('name')

const people = [
  { name: 'Kyle' },
  { name: 'Shirley' },
  { name: 'Kent' },
  { name: 'Sarah' },
  { name: 'Ken' }
]

const names = map2(pickName)(people) // ['Kyle', 'Shirley', 'Kent', 'Sarah', 'Ken']
