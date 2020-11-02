
const a = [1, 2, 3]
const b = a
b.push(4)
console.log(a) // [1, 2, 3, 4]
console.log(a === b) // true, same reference

// Or with an object
const c = { foo: 'bar' }
const d = c
d.foo = 'baz'
console.log(d.foo) // 'baz'
console.log(c === d) // true, same reference

class MutableGlass {
  constructor(content, amount) {
    this.content = content
    this.amount = amount
  }

  takeDrink(value) {
    this.amount = Math.max(this.amount - value, 0)
    return this
  }
}

const mg1 = new MutableGlass('water', 100)
const mg2 = mg1.takeDrink(20)
console.log(mg1.amount === 80 && mg1.amount === mg2.amount) // true
console.log(mg1 === mg2) // true


class ImmutableGlass {
  constructor(content, amount) {
    this.content = content
    this.amount = amount
  }

  takeDrink(value) {
    return new ImmutableGlass(this.content, Math.max(this.amount - value, 0))
  }
}

const ig1 = new ImmutableGlass('water', 100)
const ig2 = ig1.takeDrink(20)
console.log(ig1.amount !== ig2.amount) // true
console.log(ig1 === ig2) // false