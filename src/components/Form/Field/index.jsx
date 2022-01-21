import React from 'react';


const Input = (props) => {
    const {
        name,
        label,
        type,
        register,
        errors,
        number
    } = props
    
    return ( 
        <label  style={{display:'flex',flexDirection:'column',marginBottom:'32px'}}>
            <span>{label}</span>
            <input type={type} name={name} {...register(name)}  style={{height:'50px'}} />
            {(!!number) &&
                <span style={{fontSize:'10px'}}>Digite apenas números</span>
            }

            {errors[name]?.message}
        </label>
     );
}

const Field = {
    Input,
}
 
export default Field;