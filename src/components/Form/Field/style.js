import styled,{css} from 'styled-components';


export const LabelStyle = styled.label`
    display: flex;
    flex-direction: column;
    

`
export const ContentStyle = styled.span`
    font-size:var(--font-normal);
    font-weight:500;
    margin-bottom:5px;
`

export const InputStyle = styled.input`
    height: 44px;
    padding-left:10px;
    border-radius:2px;

    ${({disabled})=> disabled && css`
        background-color:#d1d0d0;
    ` }

    ${({error}) => error && 
            css`
                border:1px solid var(--bg-color-error) ;
                box-shadow: 0px 0px 5px var(--bg-color-error)  ;
            `
        }

    &:focus{
        ${({error}) => !error &&
            css`
                border:1px solid #3B83BD;
                box-shadow: 0px 0px 5px  #3B83BD;
            `
        }
    }

   

`




        