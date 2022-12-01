import { FlatList } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';
import {Container } from './styles';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native'; //Navegação

// Fazer as navegações nas paginas usando os types abaixo + importação:
type RootParamList = {
  groups: undefined;
  new: undefined;
  players: {
    group: string;
  }
}

export function Groups() {

  const [groups, setGroups] = useState<string[]>(
    [
      // 'Os Bons', 'Familia', 'Amigos'
    ]
  )

  const navigation = useNavigation()

  function handleNewGroup(){
    navigation.navigate('new') //Definir os tipos de navegação no @types
  }

  return (
    <Container>
      <Header/>

      <Highlight
        title= "Turmas"
        subtitle= "Jogue com a sua turma"
      />

      <FlatList
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => <ListEmpty message='Que tal cadastrar a primeira turma?'/>}
      />

      <Button
        title="Criar uma nova turma"
        type='PRIMARY'
        onPress={handleNewGroup}
      />
      
    </Container>
  );
}

