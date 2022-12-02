import {useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import { FlatList, Alert} from 'react-native';

import {Container, Content, Icon  } from './styles';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { groupCreate } from '@storage/group/groupCreate';

import { groupsGetAll } from '@storage/group/groupsGetAll';
import { AppError } from '@utils/AppError';

// type Props = TouchableOpacityProps & {
//     title: string;
//     type?: ButtonTypeStyleProps;
// }

export function NewGroups(){

    const navigation = useNavigation();
    const [group, setGroup] = useState('')

    async function handleNew(){
        try {
            if(group.trim().length === 0){ //Trim nao deixa caracteres no input
                Alert.alert('Novo Grupo', 'Informe o nume da turma') 
            }

            await groupCreate(group);
            navigation.navigate('players', {group})      
        } catch (error) {
            if (error instanceof AppError){
                Alert.alert('Novo Grupo', error.message)
              } else {
              Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')

            }
        }        
    }

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
                    onChangeText={setGroup} //Armazenar os dados de uma tela pra outra
                />

                <Button 
                    title="Criar"
                    style={{marginTop: 20}}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}