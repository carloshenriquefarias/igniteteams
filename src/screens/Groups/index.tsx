import { FlatList, Alert} from 'react-native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import {Container } from './styles';
import {useState, useEffect, useCallback} from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'; //Navegação

import { groupsGetAll } from '@storage/group/groupsGetAll';
import { AppError } from '@utils/AppError';
import { Loading } from '@components/Loading';

// Fazer as navegações nas paginas usando os types abaixo + importação:
type RootParamList = {
  groups: undefined;
  new: undefined;
  players: {
    group: string;
  }
}

export function Groups() {

  const [groups, setGroups] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation()

  function handleNewGroup(){
    navigation.navigate('new') //Definir os tipos de navegação no @types
  }

  async function fetchGroups(){ //Busca os grupos ja cadastrados (CARREGAMENTO DOS GRUPOS)
    try {
      setIsLoading(true)
      const data = await groupsGetAll()
      setGroups(data)      

    } catch (error) {
      if (error instanceof AppError){
        Alert.alert('Novo Grupo', error.message)
      } else {
        Alert.alert('Novo Grupo', 'Não foi possível criar um novo grupo')      
      }

    } finally{
      setIsLoading(false)
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', {group})
  }

  useFocusEffect(useCallback(() => { //Listando grupos cadastrados na tela principal
    fetchGroups()
  }, []));

  return (
    <Container>
      <Header/>

      <Highlight
        title= "Turmas"
        subtitle= "Jogue com a sua turma"
      />

      { isLoading ? <Loading/> :
        <FlatList
          data={groups}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <GroupCard 
              title={item}
              onPress={() => handleOpenGroup (item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?'/>}
        />
      }
      <Button
        title="Criar uma nova turma"
        type='PRIMARY'
        onPress={handleNewGroup}
      />
      
    </Container>
  );
}

