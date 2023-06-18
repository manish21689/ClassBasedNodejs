let name = "Manish"
let age = 24

let fun1 = () => {
    console.log("fun1 callled")
}

let fun2 = (a, b) => {
    return a + b;
}

exports.fun3 = () => {
    console.log(" called fun3")
}

module.exports.fun4 = (par) => {
    return par === "MANISH"
}


//module.exports = { name, age, fun1, fun2 }
module.exports.name = name
module.exports.age = age
module.exports.fun1 = fun1
module.exports.fun2 = fun2
//module.exports = { name, age, fun1, fun2 }