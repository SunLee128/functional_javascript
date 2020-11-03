function add(x, y) {
  return x + y
}

function memoize(fn) {
  // We create a cache inside the closure of the `memoize` function which creates a new cache for each function we pass to `memoize`. 

  const cache = {}

  // The goal is to return a function with an identical signature as the one passed in
  return (...args) => {
    // We need to create a key for our cache. A simple way to do this is to join the args with a delimiter that clearly separates arguments
    // This way the arguments (12, 3) don't create the same key as (1, 23)
    const key = args.map(JSON.stringify).join('---')

    if (cache[key] !== undefined) {
      //  returned a value from the cache
      console.log('from cache')
      return cache[key]
    }

    const result = fn(...args)
    cache[key] = result

    return result
  }
}

const memoizedAdd = memoize(add)

// const factorial = memoize(n => {
//   if (n === 0) {
//     return 1
//   }

//   return n * factorial(n - 1)
// })


/*

function Profile({ name, location }) {
  return (
    <div>
      <div>{name}</div>
      <div>{location}</div>
    </div>
  )
}

const MemoizedProfile = React.memo(Profile)

*/