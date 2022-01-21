import React from 'react';
import Field from '../Field';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


const FormWhatYourIP = () => {

    const schema = Yup.object().shape({
        nome: Yup.string().required('Campo Obrigatorio'),
        profissao: Yup.string().required('Campo Obrigatorio'),
        celular: Yup.string('Somente numeros').required('Campo obrigatorio'),
        meuIP: Yup.string().required('Campo Obrigatorio'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const newUser = (data) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(newUser)}>

                <Field.Input
                    label={'Nome'}
                    type={'text'}
                    name={'nome'}
                    register={register}
                    errors={errors} />


                <Field.Input
                    label={'Profissão'}
                    type={'text'}
                    name={'profissao'}
                    register={register}
                    errors={errors} />

                <Field.Input
                    label={'Celular'}
                    number={'number'}
                    type={'text'}
                    name={'celular'}
                    register={register}
                    errors={errors} />
               

                <div>
                    <Field.Input
                        label={'Meu IP'}
                        type={'text'}
                        name={'meuIP'}
                        register={register}
                        errors={errors} />

                    <button>ENCONTRAR IP</button>
                </div>

                <button>SALVAR</button>
                {/* <button>LIMPAR</button> */}
            </form>
        </>
    );
}

export default FormWhatYourIP;