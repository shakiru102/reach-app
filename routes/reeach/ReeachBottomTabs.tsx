import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ReeachBottomTabsPramsList } from '../../interface'
import Reeach from '../../screens/reeach/bottomtabs/Reeach'
import TabBarIcon from '../../components/common/TabBarIcon'
import Header from '../../components/reeach/Header'
import Menu from '../../screens/reeach/bottomtabs/Menu'
import Orders from '../../screens/reeach/bottomtabs/Orders'
import Customers from '../../screens/reeach/bottomtabs/Customers'
import Records from '../../screens/reeach/bottomtabs/Records'
import { screenSize } from '../../constants'

const ReeachBottomTabsNavigations = createBottomTabNavigator<ReeachBottomTabsPramsList>()

const ReeachBottomTabs = () => {
  return (
    <ReeachBottomTabsNavigations.Navigator
    initialRouteName='home'
    screenOptions={{
      tabBarLabel: ({ 
        children, 
        focused }) => 
        <Text 
        className={` -top-3 ${ screenSize === 'phone' ? 'text-[9px]' : 'text-[12px]' } ${ focused ? 'font-helvetical-bold text-[#2F80ED]' : 'font-helvetical' }`}
        >{ children }</Text>,
        tabBarStyle: {
          height: 90
        }
    }}
    >
        <ReeachBottomTabsNavigations.Screen 
        options={{
          headerTitle: () => <Header />,
          headerTitleContainerStyle: {
              width: '100%',
          },
          headerStyle: {
              height: 120,
              backgroundColor: '#F2F2F2'
          },
          headerShadowVisible: false,
            title: 'My shop',
            tabBarIcon: ({ focused }) => <TabBarIcon name='shop' focused={focused} />
        }}
        name='home' 
        component={Reeach} />

        <ReeachBottomTabsNavigations.Screen 
        options={{
            // headerShown: false,
            title: 'My menu',
            tabBarIcon: ({ focused }) => <TabBarIcon name='cutlery' focused={focused} />
        }}
        name='menu' 
        component={Menu} />

        <ReeachBottomTabsNavigations.Screen 
        options={{
            // headerShown: false,
            title: 'Orders',
            tabBarIcon: ({ focused }) => <TabBarIcon name='cart' focused={focused} />
        }}
        name='order' 
        component={Orders} />

      <ReeachBottomTabsNavigations.Screen 
        options={{
            // headerShown: false,
            title: 'Customers',
            tabBarIcon: ({ focused }) => <TabBarIcon name='person' focused={focused} />
        }}
        name='customer' 
        component={Customers} />

      <ReeachBottomTabsNavigations.Screen 
        options={{
            // headerShown: false,
            title: 'Records',
            tabBarIcon: ({ focused }) => <TabBarIcon name='record' focused={focused} />
        }}
        name='records' 
        component={Records} />

    </ReeachBottomTabsNavigations.Navigator>

    
  )
}

export default ReeachBottomTabs