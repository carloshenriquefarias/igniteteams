import {Container, Form, HeaderList, NumbersOfPlayers} from './styles';
import { Header } from '@components/Header';
import { Filter } from '@components/Filter';
import { Button } from '@components/Button';
import { ButtonIcon } from '@components/ButtonIcon';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { FlatList } from 'react-native';
import { useState } from 'react';

// type Props = TouchableOpacityProps & {
//     title: string;
//     type?: ButtonTypeStyleProps;
// }

export function Players(){

    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState([])

    return(
        <Container>        
            <Header showBackButton/>
            
                {/* <Icon/> */}
                <Highlight
                    title="Nome da turma"
                    subtitle='Adicione a galera e separe os times'
                />

                <Form>
                    <Input
                        placeholder='Nome da pessoa'
                        autoCorrect={false} //corretor nao tenta corrigir teu nome
                    />

                    <ButtonIcon
                        icon='add'
                    />
                </Form>

                <HeaderList>
                    <FlatList
                        data={['Time A', 'Time B']}
                        keyExtractor={item => item}
                        renderItem={({item}) => (
                            <Filter
                                title={item}
                                isActive={item === team}
                                onPress={() => setTeam(item)}
                            />
                        )}
                        horizontal
                    />

                    <NumbersOfPlayers>
                        {players.length}
                    </NumbersOfPlayers>

                </HeaderList>        

                {/* <Button 
                    title="Criar"
                    style={{marginTop: 20}}
                /> */}
            
        </Container>
    );
}