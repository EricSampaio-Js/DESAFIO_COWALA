// Crie uma função que sempre recebe uma array de objetos com as seguintes propriedades:

// - souEu: bool
// - responsavel: bool
// - nome: str

// Você deve organizar os objetos da mesma maneira de um grupo de WhatsaApp e retornar um array de nomes, na seguinte ordem:

// 1. Você (propriedade souEu: “true”)
// 2. Responsáveis (propriedade responsavel: “true” e listados em ordem alfabética)
// 3. Não responsáveis (listados em ordem alfabética)


const groupPerson = [
    { souEu: true, responsavel: true, nome: 'João' },
    { souEu: false, responsavel: true, nome: 'Maria' },
    { souEu: true, responsavel: false, nome: 'Pedro' },
    { souEu: true, responsavel: true, nome: 'Luiz' },
    { souEu: false, responsavel: false, nome: 'Leticia' },
    { souEu: true, responsavel: false, nome: 'Jessica' },
    { souEu: true, responsavel: true, nome: 'Guilherme' },
    { souEu: false, responsavel: false, nome: 'Matheus' },
    { souEu: true, responsavel: false, nome: 'Luiza' },
    { souEu: true, responsavel: false, nome: 'Naiane' },
    { souEu: false, responsavel: true, nome: 'Felipe' },
    { souEu: true, responsavel: true, nome: 'Junior' },
    { souEu: true, responsavel: true, nome: 'Adriano' },
    { souEu: true, responsavel: true, nome: 'Adre' },
    { souEu: true, responsavel: false, nome: 'Mariana' },
    { souEu: true, responsavel: true, nome: 'Andressa' },
]

const sessionGroup = (groupPerson) => {

    const groupSouEu = groupPerson
        .filter((data) => data.souEu == true)
        .map(({ nome }) => nome).sort()

    const groupResponsaveis = groupPerson
        .filter((data) => data.responsavel == true)
        .map(({ nome }) => nome).sort()


    const groupNaoResponsaveis = groupPerson
        .filter((data) => data.responsavel == false)
        .map(({ nome }) => nome).sort()

    return [groupSouEu, groupResponsaveis, groupNaoResponsaveis]
}

console.log(sessionGroup(groupPerson))

