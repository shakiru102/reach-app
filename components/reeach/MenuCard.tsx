import { View, Text, ImageBackground, Image, Switch } from 'react-native'
import React, { useState } from 'react'
import { platform, screenSize } from '../../constants'
import { Motion } from '@legendapp/motion'
import Online from '../../assets/onlinebackground.png'
import Offline from '../../assets/offlinebackground.png'
import Dish from '../../assets/dummy/dish.png'

const MenuCard = () => {

    const [value, setValue] = useState<boolean>(false)

  return (
    <View className={` bg-white shadow-sm mr-1 ${ platform === 'ios' ? 'shadow-[rgba(0,0,0,0.12)]' : 'shadow-black' }  flex-row ${
        screenSize === 'phone' ?
         `h-[52px] rounded-[2px] w-[49%]` :
        'h-[75px] rounded-[3px] w-[49%]'
    } `}>
        <ImageBackground source={ value ? Online : Offline} className={'h-[100%] w-[56px] justify-center items-center'}>
           <Image source={Dish} className={'w-[75%] h-[75%]'}/>
        </ImageBackground>
        <View className='flex-1  justify-end pb-3 pl-1'>
                <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[8px]' : 'text-[12px]' }`}>Fried Rice</Text>
                <Text className={`font-helvetical ${ screenSize === 'phone' ? 'text-[7px]' : 'text-[10px]' }`}>N1500 • Online</Text>
        </View>
        <Switch 
        ios_backgroundColor={'#828282'}
        thumbColor={'white'}
        trackColor={{
            false: '#828282',
            true: "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")
        }}
        value={value}
        onValueChange={(value) => setValue(value)}
        className={`${ screenSize === 'phone' ? 'scale-[0.5]' : 'scale-[1]'}`}/>
    </View>
  )
}

export default MenuCard