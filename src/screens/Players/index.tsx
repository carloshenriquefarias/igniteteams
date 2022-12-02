import {Container, Form, HeaderList, NumbersOfPlayers} from './styles';
import { Header } from '@components/Header';
import { Filter } from '@components/Filter';
import { Button } from '@components/Button';
import { PlayerCard } from '@components/PlayerCard';
import { ButtonIcon } from '@components/ButtonIcon';
import { ListEmpty } from '@components/ListEmpty';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native'; //Navegação

type RouteParams = {
    group: string; 
}

export function Players(){

    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState([])

    const route = useRoute()
    const {group} = route.params as RouteParams


    return(
        <Container>        
            <Header showBackButton/>
            
                {/* <Icon/> */}
                <Highlight
                    title={group}
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
                        data={['Time A', 'Time B', 'Time C']}
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

                <FlatList
                    data={players} //Realizar listagem de pessoas
                    keyExtractor={item => item}
                    renderItem={({item}) => (
                        <PlayerCard
                            name={item}
                            onRemove={() => {}}                          
                        />
                    )}
                    ListEmptyComponent={() => 
                        <ListEmpty 
                            message='Não existem players neste time!'                        
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={[
                        {paddingBottom: 100},
                        players.length === 0 && {flex: 1}
                    ]}
                /> 

                <Button 
                    title="Remover a Turma"
                    type='SECONDARY'
                    style={{marginTop: 20}}
                />
            
        </Container>
    );
}