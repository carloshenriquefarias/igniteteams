import {Container, Logo, BackIcon, BackButton } from './styles';
import logoImg from '@assets/logo.png'

interface Props {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props ){
    return(
        <Container>
            {
                showBackButton && //Se o showBackButton e verdadeiro MOSTRE ISSO:
                <BackButton>
                    <BackIcon/>
                </BackButton>
            }
            
            <Logo source={logoImg}/>
        </Container>
    );
}