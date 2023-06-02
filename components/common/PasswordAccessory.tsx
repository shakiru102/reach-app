import React, { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { platform, screenSize } from '../../constants'

interface PasswordAccessoryProps {
    btntoggle: () => void;
    btn: boolean
}

const PasswordAccessory: FC<PasswordAccessoryProps> = ({
    btn,
    btntoggle
}) => {
  return (
    <TouchableOpacity onPress={btntoggle} className={'top-1'}>
        <Text
            className={`${screenSize === 'phone' ? 'text-[10.52px]' : 'text-[14px]'} bottom-1  bg-white font-helvetical-bold text-[#2F80ED]`}
        >{ btn ? 'Hide' : 'Show' }</Text>
    </TouchableOpacity>
  )
}

export default PasswordAccessory