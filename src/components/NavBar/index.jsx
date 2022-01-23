import React from 'react';

import LogoImg from '../../assets/Logo.png'
import LogoText from '../../assets/CowalaSoftware.png';

import { ContainerStyled,NavStyled } from './style';

const NavBar = () => {
    return (
        <ContainerStyled>
            <NavStyled>
                <img src={LogoImg} alt="logo"  logoimg='true'  />
                <img src={LogoText} alt="Titulo da logo" logotext='true'   />
            </NavStyled>
        </ContainerStyled>
    );
}

export default NavBar;