import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import ActiveShop from '../../assets/bottomtabicons/activeshop.png'
import Shop from '../../assets/bottomtabicons/shop.png'
import Cart from '../../assets/bottomtabicons/cart.png'
import ActiveCart from '../../assets/bottomtabicons/activecart.png'
import Cutlery from '../../assets/bottomtabicons/cutlery.png'
import ActiveCutlery from '../../assets/bottomtabicons/activecutlery.png'
import Person from '../../assets/bottomtabicons/person.png'
import ActivePerson from '../../assets/bottomtabicons/activeperson.png'
import Record from '../../assets/bottomtabicons/record.png'
import ActiveRecord from '../../assets/bottomtabicons/activerecord.png'
import { screenSize } from '../../constants'

interface TabBarIconProps {
    name: 'shop' | 'cart' | 'cutlery' | 'person' | 'record';
    focused: boolean;
}

const TabBarIcon: FC<TabBarIconProps> = ({
    focused,
    name
}) => {

  switch (name) {
    case 'cart':
        
        return <>
                  {
                    focused ? 
                    <Image 
                    source={ActiveCart} 
                    className={`${ screenSize === 'phone' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]' }`}
                    /> : 
                    <Image 
                    source={Cart} 
                    className={`${ screenSize === 'phone' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]' }`}
                    />
                  }
            </>

        case 'cutlery':
        
        return <>
                  {
                    focused ? 
                    <Image 
                    source={ActiveCutlery} 
                    className={`${ screenSize === 'phone' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]' }`}
                    /> : 
                    <Image 
                    source={Cutlery} 
                    className={`${ screenSize === 'phone' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]' }`}
                    />
                  }
            </>  
         
         case 'person':
        
         return <>
                   {
                     focused ? 
                     <Image 
                     source={ActivePerson} 
                     className={`${ screenSize === 'phone' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]' }`}
                     /> : 
                     <Image 
                     source={Person} 
                     className={`${ screenSize === 'phone' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]' }`}
                     />
                   }
             </> 
        
        case 'record':
        
        return <>
                  {
                    focused ? 
                    <Image 
                    source={ActiveRecord} 
                    className={` object-cover ${ screenSize === 'phone' ? 'w-[22px] h-[18px]' : 'w-[24px] h-[24px]' }`}
                    /> : 
                    <Image 
                    source={Record} 
                    className={` object-cover ${ screenSize === 'phone' ? 'w-[22px] h-[18px]' : 'w-[24px] h-[24px]' }`}
                    />
                  }
            </>


    default:
        
        return <>
                  {
                    focused ? 
                    <Image 
                    source={ActiveShop} 
                    className={`${ screenSize === 'phone' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]' }`}
                    /> : 
                    <Image 
                    source={Shop} 
                    className={`${ screenSize === 'phone' ? 'w-[20px] h-[20px]' : 'w-[24px] h-[24px]' }`}
                    />
                  }
            </>
  }
}

export default TabBarIcon