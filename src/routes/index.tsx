import { View } from 'react-native';
import { useTheme } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export function Routes() {

  const { COLORS } = useTheme(); //evitar que a tela pisque ao trocar a tela usando a View

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_500 }}> 
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}
