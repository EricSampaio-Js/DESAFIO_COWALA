// Crie uma função que sempre recebe um objeto como argumento e retorna-o 
// excluindo as propriedades sem valor.
// Ex.: {"fizz": "buzz", "foo": null, "bar": 42} deve retornar {"fizz": "buzz", "bar": 42}

const lisObj = {
    fizz: "buzz",
    foo: null,
    bar: 42
}

const removeObjectNull = (obj) => {
    const checkValueNull = Object.keys(obj) 
    checkValueNull.map(data => {
        if(obj[data] == null){
            delete obj[data]
        }
    })

    return obj
}

console.log(removeObjectNull(lisObj))

