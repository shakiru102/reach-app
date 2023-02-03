import { View, Text, Dimensions } from 'react-native'
import React, { FC } from 'react'
import { screenSize } from '../../constants'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import ActiveStatusButton from './ActiveStatusButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Motion } from '@legendapp/motion';
import InsightHeaderIcons from './InsightHeaderIcons';
import { setBuisnessHour } from '../../store/reducer/utilitySlice';

const Header: FC<any> = () => {

  const { focusMode, buisnessHour } = useSelector((state: RootState) => state.utilities)
  const dispatch = useDispatch()

  return (
    <>
      <View className='flex-row items-center -top-1'>
      <View className='flex-1'>
        <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[20px]' : 'text-[24px]' }`}>Good morning</Text>      
      </View>
      <View className='flex-row justify-end flex-1 items-center'>
        <ActiveStatusButton
        onPress={() => dispatch(setBuisnessHour())}
        status={buisnessHour}
        title={ screenSize === 'phone' ? buisnessHour : `You are ${ buisnessHour }`}
        />
        <View className='mx-4'><Ionicons name="notifications-outline" size={ screenSize === 'phone' ? 17 : 24} color="black" /></View>
        <Ionicons name="settings-outline" size={ screenSize === 'phone' ? 17 : 24} color="black" />
      </View>
      </View>
      <View className='flex-row items-center'>
        <Motion.View
        animate={ !focusMode ? {
            maxWidth: 0,
            opacity: 0
        } : {
          maxWidth: Dimensions.get('screen').width / 2,
          opacity: 1
        }}
        className={'overflow-hidden flex-1 flex-row items-center '} >
          <View className='mr-6'>
            <InsightHeaderIcons name='Bland' />
          </View>
          <AntDesign name="qrcode" size={20} color="black" />
        </Motion.View>
      <View className='flex-row items-center'>
          <Text className={`font-helvetical ${ screenSize === 'phone' ? 'text-[13px]' : 'text-[16px]' }`}>Opened 7:30am</Text>
          <View className='rounded-full w-[5px] h-[5px] bg-black mx-[6px]'/>
          <Text className={`font-helvetical text-[#2F80ED] ${ screenSize === 'phone' ? 'text-[13px]' : 'text-[26px]' }`}>Set shop hours</Text>
        </View>
      </View>
    </>
  )
}

export default Header