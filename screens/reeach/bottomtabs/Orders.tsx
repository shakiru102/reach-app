import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { ReeachBottomTabsPramsList } from '../../../interface'

type Props = BottomTabScreenProps<ReeachBottomTabsPramsList, 'order'>

const Orders: FC<Props> = () => {
  return (
    <View>
      <Text>Orders</Text>
    </View>
  )
}

export default Orders