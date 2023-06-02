import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthStackPramsList } from '../../interface'
import Signup from '../../screens/auth/Signup'
import Signin from '../../screens/auth/Signin'
import InitiateResetPassword from '../../screens/auth/InitiateResetPassword'
import ResetPassword from '../../screens/auth/ResetPassword'

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
        <AuthStackNavigation.Screen name='initiate-reset-password' component={InitiateResetPassword} />
        <AuthStackNavigation.Screen name='reset-password' component={ResetPassword} />
    </AuthStackNavigation.Navigator>
  )
}

export default AuthNavigations