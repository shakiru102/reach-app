import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackPramsList } from '../../interface'
import Signup from '../../screens/auth/Signup'
import Signin from '../../screens/auth/Signin'

const AuthStackNavigation = createStackNavigator<AuthStackPramsList>()

const AuthNavigations = () => {
  return (
    <AuthStackNavigation.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
        <AuthStackNavigation.Screen name='signup' component={Signup} />
        <AuthStackNavigation.Screen name='signin' component={Signin} />
    </AuthStackNavigation.Navigator>
  )
}

export default AuthNavigations