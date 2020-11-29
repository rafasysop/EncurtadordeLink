import React from 'react';
import { Logo, HeaderContainer } from './styles';

function Header(props) {
    return(
    <>
        <HeaderContainer>
            {/* <Logo src={} alt='Pitu - Encurtador de URL' /> */}
            <h1>Pitu</h1>
            <p>{props.children}</p>
        </HeaderContainer>
    </>
    )
}

export default Header;