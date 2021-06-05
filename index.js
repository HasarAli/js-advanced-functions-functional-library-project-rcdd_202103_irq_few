const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection) 
      
      for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i], i, newCollection)
      }
      
      return collection;

    },

    map: function(collection, callback) {
      
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection)
      
      for (let i = 0; i < newCollection.length; i++) {
        newCollection[i] = callback(newCollection[i], i, newCollection)
      }
      
      return newCollection;

    },

    reduce: function(collection, callback, acc) {
      
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection)
      
      let i = 0;
      !acc && (acc = newCollection[i++])
      
      while (i < newCollection.length)
        acc = callback(acc, newCollection[i++], newCollection)
      
      return acc

    },

    find: function(collection, predicate) {
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection)
      
      let match
       for (let i = 0; i < newCollection.length; i++) {
        match = newCollection[i]
        if ( predicate(newCollection[i]) ) {
          return match
        }
      }
      
      return undefined
      
    },
    
    filter: function(collection, predicate) {
      
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection)
      
      const matches = []
      let match
       for (let value of newCollection) {
        match = value
        if ( predicate(value) )
          matches.push(match)
      }
      
      return matches
      
    },
    
    size: function(collection) {
      
      const newCollection = Array.isArray(collection) ? [...collection] : Object.values(collection)
      
      return newCollection.length
      
    },
    
    first: function(array, n) {
      array = [...array]
      if (!n || n == 1) 
        return array[0]
      
      const firsts = []
      for (let i = 0; i < n; i++)
        firsts.push(array[i])
      
      return firsts
    },
    
    last: function(array, n) {
      const lastIndex = array.length - 1
      
      if (!n || n <= 1) 
        return array[lastIndex]
      
      const lasts = []
      for (let i = array.length - n; i < array.length; i++)
        lasts.push(array[i])
      
      return lasts
    },
    
    compact: function(array) {
      const newArr = []
      for (let value of array)
        if (value) newArr.push(value)
      return newArr
    },
    
    sortBy: function(array, callback) {
      const newArr = [...array]
      newArr.sort((a,b) => callback(a) - callback(b))
      return newArr
    },
     
    flatten: function(array, depth) {
      const newArr = []
      
      const getAllVals = (values, stop) => {
        for(let value of values){
          if(!Array.isArray(value) || stop) {
            newArr.push(value)
            continue
          }
          getAllVals(value, depth)
        }
      }
      
      getAllVals(array)
      return newArr
    },

<<<<<<< HEAD
    uniq: function(array, sorted=false, transform=x => x) {
      const newArr = []
      
      if (sorted) {
        let prev;
        for (let i = 0; i < array.length; i++) {
          if (transform(array[i]) === transform(array[i-1]) && i) continue
          newArr.push(array[i])
        }
        return newArr
      }
      
      const storedVals = []
      for (let item of array) {
        if (storedVals.findIndex( val => transform(val) === transform(item) ) == -1) {
          newArr.push(item)
          storedVals.push(transform(item))
        }
      }
      return newArr
    },

=======
    uniqSorted: function(array, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(array, sorted=false, callback=x => x) {
      const newArr = []
      
      if (sorted) {
        let prev;
        for (let item in array) {
          if (item === prev) continue
          newArr.push(item)
        }
        return newArr
      }
      
      const storedVals = []
      for (let item in array) {
        if (storedVals.findIndex( val => transform(val) ==== transform(item) ) == -1) {
          newArr.push(item)
          storedVals.push(transform(item))
        }
      }
      return newArr
    },

>>>>>>> 2cc4119cf0c9435e89e43d2c43a79fe7b1dadc16
    keys: function(obj) {
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
<<<<<<< HEAD
      
      const keys = []
      for (let key in obj)
        keys.push(obj[key])
      return keys
    },

    functions: function(obj) {
      const keys = []

      for (let key in obj) {
        if (typeof obj[key] === 'function'){
          keys.push(key)
        }
      }

      return keys.sort()
=======
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
>>>>>>> 2cc4119cf0c9435e89e43d2c43a79fe7b1dadc16
    },

  }
})()

fi.libraryMethod()

<<<<<<< HEAD
let res = fi.uniq([1,1,1,4]);
=======
let res = fi.flatten([1,2,[[[3]]],[4]], true);
>>>>>>> 2cc4119cf0c9435e89e43d2c43a79fe7b1dadc16

console.log(res)
