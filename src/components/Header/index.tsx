import {Container, Logo, BackIcon, BackButton } from './styles';
import logoImg from '@assets/logo.png'
import { useNavigation } from '@react-navigation/native'; //Navegação

interface Props {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props ){

    const navigation = useNavigation()

    function handleGoBack() {
        // navigation.goBack(); //Volta pra tela anterior
        navigation.navigate('groups'); //Volta pra tela que voce escolher
    }

    return(
        <Container>
            {
                showBackButton && //Se o showBackButton e verdadeiro MOSTRE ISSO:
                <BackButton onPress={handleGoBack}>
                    <BackIcon/>
                </BackButton>
            }
            
            <Logo source={logoImg}/>
        </Container>
    );
}