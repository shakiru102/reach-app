import { Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import { screenSize } from '../../constants'

interface PrimaryButtonProps {
    title: string;
    onPress: (e?: any) => void
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
    onPress,
    title
}) => {
  return (
    <Pressable
    onPress={onPress}
    className={` ${screenSize === 'phone' ? 'w-[60px] h-[20px] rounded-[4px]' : 'w-[80px] h-[37px] rounded-[6.8px]'} bg-[#2F80ED] justify-center items-center  `}
    >
        <Text className={`text-white font-helvetical text-center ${ screenSize === 'phone' ? 'text-[12px]' : 'text-[17px]' }`}>{ title }</Text>
    </Pressable>
  )
}

export default PrimaryButton