// Crie uma função que recebe uma data e uma string. Essa string é a validade. 
// Você deve retornar indicando se está expirado ou não.

// Ex: ("2021-11-17T20:40:09.503Z", "10d") retorna false; ("2021-12-10T00:00:00.000Z", "180d") 
// retorna true.

const expiration = (dateOfCreation,validateInDay)=>{
    dateOfCreation = new Date(`${dateOfCreation} 00:00:00`)
    dateOfCreation.setDate(dateOfCreation.getDate() + validateInDay)

    return dateOfCreation
}

const itsExpirations = (currentDate,expirationDate)=>{
    if (currentDate > expirationDate) {
        // Produto esta vencido
        return `${true}  O produto esta vencido, venceu na data ${expirationDate.toLocaleString('pt-Br')}`
    } else {
        // Produto esta dentro da válidade
        return (
            `${false}  O produto não esta vencido,  o prazo de validade vai até `
            + `${expirationDate.toLocaleString('pt-Br')}`
            )
    }
}

const checkValidate = (dateOfCreation, validateInDay) => {
    const currentDate = new Date();
    const expirationDate = expiration(dateOfCreation,validateInDay)

    return itsExpirations(currentDate,expirationDate)
}

const dateOfCreation = '2022-01-20'
const validateInDay = 10

console.log(checkValidate(dateOfCreation, validateInDay))