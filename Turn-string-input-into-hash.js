/*
Please write a function that will take a string as input and return a hash. 
The key will always be a symbol and the value will always be an integer.
The string will be formatted as such:
  "a=1, b=2, c=3, d=4"

This string should return a hash that looks like
{ 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/


// Solution

function strToHash(str){
  let result = {}
  
  if (str.length) {
    let items = str.split(", ")
    items.forEach(item => {
      const [key, val] = item.split("=")
      result[key] = +val
    })  
  }
  return result
}