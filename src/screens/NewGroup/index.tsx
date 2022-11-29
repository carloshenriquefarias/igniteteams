import {Container, Title, ButtonTypeStyleProps  } from './styles';
import { Header } from '@components/Header';

// type Props = TouchableOpacityProps & {
//     title: string;
//     type?: ButtonTypeStyleProps;
// }

export function NewGroups(){
    return(
        <Container>        
            <Header showBackButton/>
        </Container>
    );
}