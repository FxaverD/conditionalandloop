import PromptSync from "prompt-sync"
var prompt = PromptSync()
var OddorEven = prompt('Enter a number')
if (OddorEven % 2) {
    console.log("Odd Number")
} else {
    console.log("Even Number")
}



var Prime = prompt('Enter a number')
var isPrime = true
if (Prime <= 1) {
    isPrime = false 
} else {
    for (let i = 2; i < Prime; i++) {
        if (Prime % i === 0) {
            isPrime = false
            break
        }
    }
}
if (isPrime) 
    console.log ('is a prime number')
else
    console.log ('is not a prime number')



var N = prompt('Enter a number to find the Sum of the Numbers 1 to N')
var Sum = 0
var Sprocess = ""
for (let i = 1; i <= N; i++){
    Sum += i
    Sprocess += i + (i < N ? "+" : "")
}
console.log(Sprocess + "=" + Sum)

var F = prompt('Enter a number to find the number factorial')
var Factorial = 1
var Fprocess = ""
for (let i = 1; i <= F; i++){
    Factorial *= i
    Fprocess += i + (i < F ? "x" : "")
}
console.log( Fprocess + "=" + Factorial )

var FibNum = prompt('Fibonacci')
var a = 1
var b = 1
for (let i = 3; i <= FibNum; i++) {
    let next = a + b
    a = b
    b = next
}
console.log (b)


