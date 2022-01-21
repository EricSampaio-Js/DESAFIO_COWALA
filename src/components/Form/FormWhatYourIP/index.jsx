import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import Field from '../Field';
import {
    ButtonNormal,
    ButtonLarge
} from '../../Buttons/style'
import { Form } from './style';


const FormWhatYourIP = () => {

    const schema = Yup.object().shape({
        nome: Yup.string().required('campo obrigatório *'),
        profissao: Yup.string().required('campo obrigatório *'),
        celular: Yup.string('Somente numeros').required('campo obrigatório *'),
        meuIP: Yup.string().required('campo obrigatório *'),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const newUser = (data) => {
        console.log(data)
    }

    return (
        <>
            <Form onSubmit={handleSubmit(newUser)}>

                <Field.Input
                    label={'Nome'}
                    type={'text'}
                    name={'nome'}
                    register={register}
                    errors={errors}
                    placeholder={'Digite seu nome'}
                />


                <div>
                    <Field.Input
                        label={'Profissão'}
                        type={'text'}
                        name={'profissao'}
                        register={register}
                        errors={errors}
                        placeholder={'Digite sua Profissão'} />

                    <Field.Input
                        label={'Celular'}
                        number={'number'}
                        type={'text'}
                        name={'celular'}
                        register={register}
                        errors={errors}
                        placeholder={'(99) 9 9999-9999'} />

                </div>

                <div>
                    <Field.Input
                        label={'Meu IP'}
                        type={'text'}
                        name={'meuIP'}
                        register={register}
                        errors={errors}
                        placeholder={'999.999.999.999'} 
                        disabled={'disabled'}
                        />

                    <ButtonLarge>ENCONTRAR IP</ButtonLarge>
                </div>

                <div>
                    <ButtonNormal>SALVAR</ButtonNormal>
                    <ButtonNormal>LIMPAR</ButtonNormal>
                </div>
            </Form>
        </>
    );
}

export default FormWhatYourIP;