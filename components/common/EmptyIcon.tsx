import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { EmptyTypes } from './EmptyIndicator'
import Order from '../../assets/order.png'
import Menu from '../../assets/menu.png'
import DemandItem from '../../assets/demanditem.png'
import Buyer from '../../assets/buyer.png'
import { screenSize } from '../../constants'

interface EmptyIconProps {
    name: EmptyTypes
}

const EmptyIcon: FC<EmptyIconProps> = ({
    name
}) => {
  switch (name) {
    case 'order':
        
        return <Image 
         source={Order}
         className={`${ screenSize === 'phone' ? 'w-[75px] h-[70px]' : 'w-[126.27px] h-[118.98px]' }`}
        />;
    case 'menu' :
    
        return <Image 
        source={Menu}
        className={`${ screenSize === 'phone' ? 'w-[70px] h-[85px]' : 'w-[95px] h-[127px]' }`}
        />;
    case 'demand-item' : 
        return <Image 
        source={DemandItem}
        className={`${ screenSize === 'phone' ? 'w-[100px] h-[100px]' : 'w-[146.56px] h-[145px]' }`}
        />;
            
    default:
        return <Image 
        source={Buyer}
        className={`${ screenSize === 'phone' ? 'w-[256px] h-[52px]' : 'w-[473px] h-[84px]' }`} 
        />;
  }
}

export default EmptyIcon