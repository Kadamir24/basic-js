const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newArr = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i < arr.length - 2 && arr[i] == '--discard-next' && arr[i+2] == '--double-prev' 
      || i < arr.length - 2 && arr[i] == '--discard-next' && arr[i+2] == '--discard-prev' ) {
        i++
        i++
        continue
      } else if ( i < arr.length - 2 && arr[i] == '--double-next' && arr[i+2] == '--double-prev') {
        newArr.push(arr[i+1])
        newArr.push(arr[i+1])
        newArr.push(arr[i+1])
        i++
        i++
        continue
      } else if (arr[i] == '--double-next') {
        if (i == arr.length - 1) {
          break
        }
        newArr.push(arr[i+1])
        newArr.push(arr[i+1])
        i++
        continue
      } else if (arr[i] == '--double-prev') {
        if (i == 0) {
          continue
        }
        newArr.push(arr[i-1])
        continue
      } else if (arr[i] == '--discard-prev') {
        if (i == 0) {
          continue
        }
        newArr.pop()
        continue
      } else if (arr[i] == '--discard-next') {
        if (i == arr.length - 1) {
          break
        }
        i++
        continue
      }
      newArr.push(arr[i])
    }
    return newArr
};


// function transform(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i < arr.length - 2 && arr[i] == '--discard-next' && arr[i+2] == '--double-prev' 
//     || i < arr.length - 2 && arr[i] == '--discard-next' && arr[i+2] == '--discard-prev' ) {
//       i++
//       i++
//       continue
//     } else if ( i < arr.length - 2 && arr[i] == '--double-next' && arr[i+2] == '--double-prev') {
//       newArr.push(arr[i+1])
//       newArr.push(arr[i+1])
//       newArr.push(arr[i+1])
//       console.log('chetam')
//       i++
//       i++
//       continue
//     } else if (arr[i] == '--double-next') {
//       if (i == arr.length - 1) {
//         break
//       }
//       newArr.push(arr[i+1])
//       newArr.push(arr[i+1])
//       i++
//       continue
//     } else if (arr[i] == '--double-prev') {
//       if (i == 0) {
//         continue
//       }
//       newArr.push(arr[i-1])
//       continue
//     } else if (arr[i] == '--discard-prev') {
//       if (i == 0) {
//         continue
//       }
//       newArr.pop()
//       continue
//     } else if (arr[i] == '--discard-next') {
//       if (i == arr.length - 1) {
//         break
//       }
//       i++
//       continue
//     }
//     newArr.push(arr[i])
//   }
//   // console.log(newArr.length)
//   return newArr
// }

// console.log(transform([1, 2, 3, '--double-prev', 4, 5]))
// console.log(transform(['--double-prev', 1, 2, 3, 4, 5]))
// console.log(transform([1, 2, 3, 4, '--double-next', 5]))

// console.log(transform(['--discard-prev', 1, 2, 3, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-next', 4, 5, '--discard-next']))

// console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
// console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))