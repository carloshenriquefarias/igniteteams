import {Container, Content, Icon  } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

// type Props = TouchableOpacityProps & {
//     title: string;
//     type?: ButtonTypeStyleProps;
// }

export function NewGroups(){
    return(
        <Container>        
            <Header showBackButton/>
            <Content>
                <Icon/>
                <Highlight
                    title="New Groups"
                    subtitle='Crie uma turma para adicionar novas pessoas'
                />
                <Input
                    placeholder='Nome da turma'
                />

                <Button 
                    title="Criar"
                    style={{marginTop: 20}}
                />
            </Content>
        </Container>
    );
}