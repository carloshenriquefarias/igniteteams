import { ThemeProvider } from 'styled-components/native';
import {ActivityIndicator, StatusBar} from 'react-native'
import theme from './src/theme';
import {Routes} from './src/routes';
import { Groups } from '@screens/Groups';
import { NewGroups } from '@screens/NewGroup';
import { Players } from '@screens/Players';
import { useFonts,Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';

export default function App() {

  const [fontLoaded] = useFonts({Roboto_400Regular,Roboto_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />   
      { fontLoaded ? <Routes/> : <Loading/> } 
    </ThemeProvider>
    
  );
}

