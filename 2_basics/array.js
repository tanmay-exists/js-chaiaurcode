// js arrays are resizable and can contain more than one datatype in a single array

const myArr = [0, 4, 2, 8, 3, 9]
const myniggas = ["deluxnigga", "premiumnigga", "extradarknigga"]
console.log(myArr[0])

const myArr2 = new Array(1, 2, 3, 4)
myArr.push(6)
myArr.push(7)
myArr.pop()
myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(11))

const newArr = myArr.join()
console.log(myArr)
console.log(typeof myArr)
console.log(newArr)
console.log(typeof newArr)


// slice, splice
console.log("A", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)