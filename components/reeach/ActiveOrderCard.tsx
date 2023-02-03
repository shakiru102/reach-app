import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import Dish from '../../assets/dummy/dish.png'
import Person from '../../assets/dummy/person.png'
import PrimaryButton from '../common/PrimaryButton'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { screenSize } from '../../constants'

const ActiveOrderCard = () => {
  return (
    <View
    style={{ width: Dimensions.get('screen').width - 50}}
    className={`${ screenSize === 'phone' ? ' h-[132px]' : 'h-[278px]' } p-5 flex-row items-center `}
    >
        <Image source={Dish} />
       <View className='flex-1 justify-between ml-4'>
          <View className='flex-row gap-1'>
             <Image source={Person} />
             <View>
                <Text className={`font-helvetical ${ screenSize === 'phone' ?  'text-[10px]' : 'text-[14px]' } text-[#828282]`}>David Ojotuwe・3 miles away</Text>
                <Text className='font-helvetical text-[10px] text-[#828282]'>reeach.deeoh</Text>
             </View>
          </View>
          <View>
            <View className='flex-row justify-between my-3'>
                <View>
                    <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[14px]' : 'text-[24px]'}`}>Vegetable Salad</Text>
                    <Text className={`font-helvetical ${ screenSize === 'phone' ?  'text-[8px]' : 'text-[14px]' } mt-1 text-[#4F4F4F]`}>3 mins ago.</Text>
                </View>
                <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[14px]' : 'text-[24px]'}`}>N2200</Text>
            </View>
          </View>
          <View className='flex-row justify-end items-center'>
            <TouchableOpacity>
                <Text
                className={`${ screenSize === 'phone' ? 'text-[12px]' : 'text-[17px]' } mr-6`}
                >Decline</Text>
            </TouchableOpacity>
             <PrimaryButton onPress={() => {}} title={'Accept'}/>
          </View>
       </View>
    </View>
  )
}

export default ActiveOrderCard