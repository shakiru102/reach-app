import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { screenSize } from '../../constants'
import ReeachButton from '../common/ReeachButton'
import ReeachIcon from '../../assets/reeachicon.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Motion } from '@legendapp/motion'

const CurrentSales = () => {

  const { focusMode } = useSelector((state: RootState) => state.utilities)

  return (
    <View className='flex-row justify-between p-5 items-center border-[#BDBDBD] border-t-[0.3px]  bg-[#F2F2F2]'>
      <View className='flex-1 mr-2'>
        <View className='flex-row items-center'>
            <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[12px]' : 'text-[14px]' }`}> Today's Sales</Text>
            <View className='rounded-full w-[4px] h-[4px] bg-black mx-1'/>
            <Text className={`font-helvetical ${ screenSize === 'phone' ? 'text-[12px]' : 'text-[14px]' } text-[#828282]`}>8 transaction</Text>
        </View>
        <Text className={`${ screenSize === 'phone' ? 'text-[20px]' : 'text-[28px]' } font-helvetical-bold my-2`}>N17,000.00</Text>
        <TouchableOpacity>
            <Text className={`${screenSize === 'phone' ? 'text-[12px]' : 'text-[16px] text-right'} text-[#2F80ED] font-helvetical`}>See details</Text>
        </TouchableOpacity>
      </View>
      <Motion.View 
      animate={{
        flex: focusMode ? 1 : 0
      }}
      className={`${ screenSize === 'phone' ? 'w-[63.3px]' : 'w-[200px]' } overflow-hidden ml-2`}>
         <ReeachButton 
         disabled
         onPress={() => {}}
         title={
            <View className='justify-center items-center py-3 flex-row'>
                <Image source={ReeachIcon}  />
                { screenSize === 'phone' ? 
                
                   <Motion.View 
                   className={'overflow-hidden'}
                   animate={
                    focusMode ? { opacity: 1 } : { opacity: 0 }
                   }
                   transition={{
                    type: 'tween' as any,
                    delay: 100
                   }}
                   >{ focusMode && <Text className='text-center text-[12px] font-helvetical-bold text-white ml-2'>New transaction</Text>}</Motion.View>
                 : 
                <Text
                className={`'text-[18px]' text-center font-helvetical-bold text-white ml-2`}
                >New transaction</Text> 
                 }
            </View>
         }
         childrenType={'element'}
         />
      </Motion.View>
    </View>
  )
}

export default CurrentSales