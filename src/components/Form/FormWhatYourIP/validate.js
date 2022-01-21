import * as Yup from 'yup';

export const ValidateSchema = ()=>{
    const schema = Yup.object().shape({
        nome: Yup.string().required('campo obrigatório *'),
        profissao: Yup.string().required('campo obrigatório *'),
        celular: Yup.string('Somente numeros').required('campo obrigatório *'),
        meuIP: Yup.string().required('campo obrigatório *'),
    })

    return schema;
}