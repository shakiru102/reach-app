import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native'
import { ReeachStackPramsList } from '../../interface'
import ReeachBottomTabs from './ReeachBottomTabs'

const ReeachStackNavigation = createStackNavigator<ReeachStackPramsList>()

const ReeachStack = () => {
  return (
    <ReeachStackNavigation.Navigator
    initialRouteName='reeach'
    >
      <ReeachStackNavigation.Screen 
      options={{
        headerShown: false
      }}
      name='reeach' 
      component={ReeachBottomTabs} />
    </ReeachStackNavigation.Navigator>
  )
}

export default ReeachStack