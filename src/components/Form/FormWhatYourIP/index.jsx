import React,{useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { ValidateSchema } from './validate'
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import Field from '../Field';

import {
    ButtonNormal,
    ButtonLarge
} from '../../Buttons/style'
import { Form } from './style';


const FormWhatYourIP = () => {


    const schema = ValidateSchema()
    const { register, handleSubmit, formState: { errors }, setValue, clearErrors } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(()=>{
        const stringJson = localStorage.getItem('register');

        if(stringJson){
            const objectData = JSON.parse(stringJson)
            const data = Object.entries(objectData)
    
            data.map(([chave,valor]) => (
                setValue(`${chave}`,`${valor}`)
            ))     
        }

        

    },[setValue])

    const handleClearField = (e)=>{
        e.preventDefault()

        const stringJson = localStorage.getItem('register');

        if(stringJson){
            const objectData = JSON.parse(stringJson)
            const data = Object.keys(objectData)

            data.map((value) => (
                setValue(`${value}`,'')
            ))  
            localStorage.clear();
        }

    }
 
   async function addToLocalStorage(dataFormStringJson){
        try {
           await localStorage.setItem('register',dataFormStringJson);
        } catch (error) {
           console.error(error)
        }
    }

    const newUser = (data) => {
        const dataFormStringJson = JSON.stringify(data);
        addToLocalStorage(dataFormStringJson)

       
    }

    const handleGetIp = async (e) => {
        e.preventDefault()
        const { data } = await axios.get(`https://ip-fast.com/api/ip/`)
        const existsValueInData = !!data

        existsValueInData && setValue('meuIP', `${data}`)

        if (errors.meuIP?.message && existsValueInData )
            clearErrors('meuIP')
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

                    <ButtonLarge onClick={handleGetIp} >ENCONTRAR IP</ButtonLarge>
                </div>

                <div>
                    <ButtonNormal>SALVAR</ButtonNormal>
                    <ButtonNormal onClick={handleClearField} >LIMPAR</ButtonNormal>
                </div>
            </Form>
        </>
    );
}

export default FormWhatYourIP;