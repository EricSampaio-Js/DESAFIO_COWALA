import * as Yup from 'yup';

export const ValidateSchema = ()=>{
    const schema = Yup.object().shape({
        nome: Yup.string().required('campo obrigatório *').trim(),
        profissao: Yup.string().required('campo obrigatório *').trim(),
        celular: Yup.string('Somente numeros').min(15,'digite um número de telefone válido').required('campo obrigatório *').trim(),
        meuIP: Yup.string().required('campo obrigatório *').trim(),
    })

    return schema;
}