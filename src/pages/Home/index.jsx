import React from 'react';

import Form from '../../components/Form/FormWhatYourIP'

import { 
    ContainerStyled,
} from './style';

const Home = () => {
    return ( 
        <ContainerStyled>
          <Form />
        </ContainerStyled>
     );
}
 
export default Home;