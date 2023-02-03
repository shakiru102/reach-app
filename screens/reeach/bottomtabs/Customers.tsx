import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { ReeachBottomTabsPramsList } from '../../../interface'

type Props = BottomTabScreenProps<ReeachBottomTabsPramsList, 'customer'>

const Customers: FC<Props> = () => {
  return (
    <View>
      <Text>Customers</Text>
    </View>
  )
}

export default Customers