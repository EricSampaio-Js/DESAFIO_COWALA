// Crie uma função que sempre recebe um número como argumento, 
// e deve retornar uma array com os N elementos da sequência de Fibonacci.

// 💡 Ex.: ao passar 6 como argumento, deve retornar: **[0, 1, 1, 2, 3, 5]**.

// 0 1
// 1 1
// 1 2
// 2 3
// 3 5

const fibonacci = (num) => {
    const dataFibonacci = []
    let fiboCurrent = 0;
    let fiboStart = 1;
    let someFibo = 0;

    for (let count = 0; count < num; count++) {
        if (count === 0 || count === 1 || count === 2) {
            dataFibonacci.push(fiboCurrent)
            fiboCurrent = 1
          
        } else {
            
            someFibo = fiboCurrent + fiboStart
            dataFibonacci.push(someFibo)

            fiboCurrent  = fiboStart 
            fiboStart = someFibo
        }
    }
    return dataFibonacci
}

console.log(fibonacci(6))



