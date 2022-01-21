import styled from 'styled-components';

export const ContainerStyled = styled.header`
    width:100%;
   

`

export const NavStyled = styled.nav`
    display:flex;
    align-items:center;
    width:100%;
    height:121px;
    padding-left:28px;
    
    background-color: var( --bg-color-primary);

    [logoimg='true']{
        width: 88px;
        height: 96px;
        margin-right:24px;
    }

    [logotext='true']{
        width: 251px;
        height: 63px
    }

    @media (max-width:425px){
        justify-content:center;
        [logoimg='true']{
            display:none;
        }
    }

   

`