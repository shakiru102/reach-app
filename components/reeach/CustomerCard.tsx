import { View, Text, Image } from 'react-native'
import React from 'react'
import Person from '../../assets/dummy/person.png'

const CustomerCard = () => {

    const color = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")

  return (
    <View
    style={{
        backgroundColor: color
    }}
    className={'flex-row w-[207px] h-[95px] items-center p-5 rounded-[4px] mr-1'}
    >
      <Image className='w-[32px] h-[32px]' source={Person}/>
      <View className='ml-3'>
        <Text className='font-helvetical-bold text-white '>David Ojotuwe</Text>
        <Text className='font-helvetical text-white text-[10px]'>reeach • deeoh</Text>
        <Text className='font-helvetical-light text-white text-[10px]'>45 purchases</Text>
      </View>
    </View>
  )
}

export default CustomerCard