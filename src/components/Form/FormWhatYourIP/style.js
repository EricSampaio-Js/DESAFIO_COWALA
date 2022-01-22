import styled from 'styled-components';


export const Form = styled.form`
  width: 100%;
  max-width:541px;
  height:auto;

 
 @media(max-width:726px){
    padding-top:15px;
 }

  >div,>label{
      margin-bottom:20px;
  }

  &>:nth-child(2){
      display:flex;
      justify-content:space-between;

      >label{
          width:254px;
      }
      @media (max-width:726px){
      flex-direction:column;
      row-gap:20px;
      >div,
      >label,
      label>input{
        width:100%;
      }
    }
  }

  &>:nth-child(3){
      display:flex;
      justify-content:space-between;
      align-items:center;
      row-gap:20px;
      
    button{
      align-self:flex-end;
      margin-bottom:5px;

    }

    &>label>input{
      width:325px;
    }

    @media (max-width:726px){
      flex-direction:column;
      >div,
      >label,
      label>input{
        width:100%;
      }
      button{
      align-self:start;
      }
    }
  }

  &>:nth-child(4){
    display: flex;
    justify-content:center;
    column-gap:33px;

    margin-top:calc(62px - 20px);

    @media (max-width:404px){
      column-gap:16px;
      row-gap:10px;
      flex-wrap:wrap;
      justify-content:start;
    }

  }



`