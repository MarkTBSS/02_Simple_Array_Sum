function simpleArraySum(ar) {
    var result = 0; 
    for (var i = 0; i < ar.length; i++) {
        result = result + ar[i];
    }
    return result
}

var a = [1, 2, 3]
console.log(simpleArraySum(a))

function simpleArraySum2(ar) {
    return ar.reduce((a, b) => a + b)
}

var a = [1, 2, 3]
console.log(simpleArraySum2(a))

function sum(a, b) {
    return a + b
}

function simpleArraySum3(ar) {
    return ar.reduce(sum, 0)
}

var a = [1, 2, 3]
console.log(simpleArraySum3(a))