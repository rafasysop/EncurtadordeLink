import React from 'react';
import {HeaderContainer, Logo} from './styles';
import Icone from '../../assets/Icone.png';

const Header = (props) => {
    return (
        <>
            <HeaderContainer>
                <Logo src={Icone} alt='Pitu - Encurtador de URL'/>
                <h1>Crop-url</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    ) ;
}

export default Header;