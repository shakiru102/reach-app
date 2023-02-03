import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { ReeachBottomTabsPramsList } from '../../../interface'

type Props = BottomTabScreenProps<ReeachBottomTabsPramsList, 'menu'>

const Menu: FC<Props> = () => {
  return (
    <View>
      <Text>Menu</Text>
    </View>
  )
}

export default Menu