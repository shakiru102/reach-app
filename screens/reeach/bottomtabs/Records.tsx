import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { ReeachBottomTabsPramsList } from '../../../interface'

type Props = BottomTabScreenProps<ReeachBottomTabsPramsList, 'records'>

const Records: FC<Props> = () => {
  return (
    <View>
      <Text>Records</Text>
    </View>
  )
}

export default Records