import { Alert, FlatList, TextInput, Keyboard } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native'; //Navegação

import { AppError } from '@utils/AppError';

import { Container, Form, HeaderList, NumbersOfPlayers} from './styles';
import { Header } from '@components/Header';
import { Filter } from '@components/Filter';
import { Button } from '@components/Button';
import { PlayerCard } from '@components/PlayerCard';
import { ButtonIcon } from '@components/ButtonIcon';
import { ListEmpty } from '@components/ListEmpty';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';

import { playerAddByGroup } from '@storage/player/playerAddByGroup';
import { playersGetByGroup } from '@storage/player/playersGetByGroup';
import { playersGetByGroupAndTeam } from '@storage/player/playersGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveByGroup } from '@storage/player/playerRemoveByGroup';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';
import { Loading } from '@components/Loading';

type RouteParams = {
    group: string; 
}

export function Players(){
    const [isLoading, setIsLoading] = useState(true);

    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState<PlayerStorageDTO[]>([])
    const [newPlayerName, setNewPlayerName] = useState('')  
    
    const navigation = useNavigation();

    const route = useRoute()
    const {group} = route.params as RouteParams

    const newPlayerNameInputRef = useRef<TextInput>(null); //Tirando o foco do botão input

    async function handleAddPlayer(){
        if(newPlayerName.trim().length === 0){
            return Alert.alert('Nova Pessoa', 'Informe o nome da nova pessoa para adicionar')
        }
    
        const newPlayer = {
        name: newPlayerName,
        team,        
        }

        try {
            await playerAddByGroup(newPlayer, group )

            newPlayerNameInputRef.current?.blur();
            // Keyboard.dismiss(); //teclado oculto

            setNewPlayerName('') //Depois de digitar o nome deixar o input vazio
            fetchPlayersByTeam();
            // const players = await playersGetByGroup(group)
    
        } catch (error) {
            if (error instanceof AppError){
            Alert.alert('Nova Pessoa', error.message)
            } else {
            Alert.alert('Nova Pessoa', 'Não foi possível adicionar')          
            }
        }
    }

    async function fetchPlayersByTeam(){
        try {
            setIsLoading(true)
            const playersByTeam = await playersGetByGroupAndTeam (group, team);
            setPlayers(playersByTeam)            
    
        } catch (error) {            
            Alert.alert('Pessoas', 'Não foi possível adicionar as pessoas')          
        } 
        finally{
            setIsLoading(false)
        }       
    }

    async function handlePlayerRemove(playerName: string){
        try {
            await playerRemoveByGroup(playerName, group);
            fetchPlayersByTeam();            
    
        } catch (error) {            
            Alert.alert('Remover Pessoa', 'Não foi possível remover a pessoa')          
        }        
    }

    async function groupRemove(){
        try {
            await groupRemoveByName (group);
            navigation.navigate('groups');    
        } catch (error) {            
            Alert.alert('Remover Grupo', 'Não foi possível remover o grupo')          
        }  
    }

    async function handleGroupRemove(){
        Alert.alert(
            'Remover', 
            'Deseja remover o grupo?',
            [
                {text: 'Não', style: 'cancel'},
                {text: 'Sim', onPress:() => groupRemove()}
            ]
        )              
    }

    useEffect(() => {
        fetchPlayersByTeam();
    }, [team])

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
                        onChangeText={setNewPlayerName}
                        value={newPlayerName}
                        placeholder='Nome da pessoa'
                        autoCorrect={false} //corretor nao tenta corrigir teu nome
                        inputRef={newPlayerNameInputRef}
                        onSubmitEditing={handleAddPlayer}
                        returnKeyType="done"
                    />

                    <ButtonIcon
                        icon='add'
                        onPress={handleAddPlayer}
                    />
                </Form>

               
                <HeaderList>
                    { isLoading ? <Loading/> :
                    
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
                    }
                          
                    <NumbersOfPlayers> 
                        {players.length} 
                    </NumbersOfPlayers>

                </HeaderList>   

                <FlatList
                    data={players} //Realizar listagem de pessoas
                    keyExtractor={item => item.name}
                    renderItem={({item}) => (
                        <PlayerCard
                            name={item.name}
                            onRemove={() => handlePlayerRemove(item.name)}                          
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
                    onPress={handleGroupRemove}
                />
            
        </Container>
    );
}