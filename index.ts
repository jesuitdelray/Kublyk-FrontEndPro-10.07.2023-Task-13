const printNumbers = function (start: number, end: number, step: number) {
    for (let num = start; num <= end; num += step) {
        console.log(num)
    }
}

const printNumbersFrom20To30 = printNumbers.bind(null, 20, 30, 0.5)
printNumbersFrom20To30()

const calcGrivnasCost = function (dollars: number, exchangeRate: number) {
    const costInGrivnas = dollars * exchangeRate
    console.log(`${dollars} доларів = ${costInGrivnas} гривень`)
}

const exchangeRate = 27
const calcCostExchRate = calcGrivnasCost.bind(null, exchangeRate)

for (let dollars = 10; dollars <= 100; dollars += 10) {
    calcCostExchRate(dollars)
}

const sqrUpToN = function (N: number, num: number) {
    if (num ** 2 <= N) {
        console.log(num)
        sqrUpToN(N, num + 1)
    }
}

const N = 100
sqrUpToN(N, 1)

const isPrime = function (num: number, divisor: number = 2) {
    if (num <= 1 || num % divisor === 0) {
        return false
    }
    if (divisor === num) {
        return true
    }
    return isPrime(num, divisor + 1)
}

const num = 13
const isNumPrime = isPrime.bind(null, num)
console.log(`${num} ${isNumPrime() ? "є" : "не є"} простим числом.`)

const numberThree = function (num: number) {
    if (num <= 0 || num % 3 !== 0) {
        return false
    }
    if (num === 1) {
        return true
    }
    return numberThree(num / 3)
}

const isNumPowerOfThree = numberThree.bind(null, num)
console.log(
    `${num} ${
        isNumPowerOfThree() ? "Так, можна" : "Ні, не можна"
    } отримати шляхом зведення числа 3 у деякий ступінь.`
)
