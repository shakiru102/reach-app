import { View, Text, Image } from 'react-native'
import React from 'react'
import Dish from '../../assets/dummy/dish.png'
import { platform, screenSize } from '../../constants'


const InDemandCard = () => {

    const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
  return (
    <View
    className={`${ screenSize === 'phone' ? 'h-[111px] rounded-[2px] mt-2' : 'h-[79px] rounded-[1px] mr-2' } flex-row  bg-white shadow-sm ${ platform === 'ios' ? 'shadow-[rgba(0,0,0,0.12)]' : 'shadow-black' }`}
    >
        <View 
        style={{
            backgroundColor: color
        }}
        className={`  h-[100%] ${ screenSize === 'phone' ? 'w-[108px] rounded-l-[2px]' : 'w-[77px] rounded-l-[1px]' } justify-center items-center`}>
           <Image source={Dish} />
        </View>
      <View className={`justify-center ${ screenSize === 'phone' ? 'ml-3' : 'mx-2'}`}>
      <Text
      className={` font-helvetical-bold ${ screenSize === 'phone' ? 'text-[14px]' : 'text-[12px]' }`}
      >Vegetable Salad</Text>
      <Text
      className={` font-helvetical ${ screenSize === 'phone' ? 'text-[12px]' : 'text-[10px]' } text-[#4f4f4fce]`}
      >7 orders • past 3 hours</Text>
      </View>
    </View>
  )
}

// className={'w-[50%] h-[50%] object-contain'}

export default InDemandCard