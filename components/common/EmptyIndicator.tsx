import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import EmptyIcon from './EmptyIcon';
import { screenSize } from '../../constants';

export type EmptyTypes = 'order' | 'menu' | 'demand-item' | 'buyer'

interface EmptyIndicatorProps {
    emptyType: EmptyTypes ;
    emptyTitle: string;
    emptyContent: string;
    onPress: (e?: any) => void;
    buttonTitle: string

}

const EmptyIndicator: FC<EmptyIndicatorProps> = ({
    emptyContent,
    emptyTitle,
    emptyType,
    onPress,
    buttonTitle
}) => {
  return (
    <View className='justify-center items-center p-14'>
      <EmptyIcon name={emptyType} />
      <View className='my-2'>
        <Text 
        className={` font-helvetical-bold text-center ${ screenSize === 'phone' ? 'text-[16px]' : 'text-[24px]' }`}
        >{ emptyTitle }</Text>
        <Text 
        className={` font-helvetical text-[#4F4F4F] mt-1 text-center ${ screenSize === 'phone' ? 'text-[12px]' : 'text-[16px]' } my-2`}
        >{ emptyContent }</Text>
      </View>
      <Pressable 
      className={`bg-[#2F80ED] justify-center items-center rounded-[4px]`}
      onPress={onPress} >
        <Text className={`font-helvetical-bold text-white p-2 ${ screenSize === 'phone' ? 'text-[10px]' : 'text-[16px]' }`}>{ buttonTitle }</Text>
      </Pressable>
    </View>
  )
}

export default EmptyIndicator