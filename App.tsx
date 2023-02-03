import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './routes/RootNavigation';
import { platform, statusbarHeight } from './constants';
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {

  const [loaded] = useFonts({
    "Helvetica": require('./assets/fonts/Helvetica-Font/Helvetica.ttf'),
    "Helvetica-Bold": require('./assets/fonts/Helvetica-Font/Helvetica-Bold.ttf'),
    "Helvetica-Light": require('./assets/fonts/Helvetica-Font/helvetica-light-587ebe5a59211.ttf'),
  })

  if(!loaded) return null



  return (
    <Provider store={store}>
        <StatusBar style="auto" />
          <NavigationContainer>
          <RootNavigation />
          </NavigationContainer>
    </Provider>
  );
}


