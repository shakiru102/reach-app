import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import InsightIcons, { InsightIconName } from '../common/InsightIcons'
import { screenSize } from '../../constants'
import { AntDesign } from '@expo/vector-icons';
import { AnimatePresence } from '@legendapp/motion';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface ReeachInsightProps {
  insightStatus: InsightIconName
}

const ReeachInsight: FC<ReeachInsightProps> = ({
  insightStatus
}) => {

  const { auth } = useSelector((state: RootState) => state.auth)

  return (
    <View className='flex-row items-center border-[#BDBDBD] border-t-[0.3px] bg-[#F2F2F2]'>
      <View className='flex-row items-center p-5 border-[#BDBDBD] border-r-[0.3px] flex-1'>
          <InsightIcons name={insightStatus} />
        <View className='ml-2'>
            <Text className={`${ screenSize === 'phone' ? 'text-[10px]' : 'text-[12px]' }`}>Your Customers mood is</Text>
            <View className='flex-row items-center my-2'>
                <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[11.92px]' : 'text-[16px]' }`}> { insightStatus } </Text>
                <View className='rounded-full w-[4px] h-[4px] bg-black mx-1'/>
                <Text className={`font-helvetical ${ screenSize === 'phone' ? 'text-[11.92px]' : 'text-[16px]' } text-[#828282]`}>0 ratings</Text>
            </View>
            <TouchableOpacity>
              <Text className={`${screenSize === 'phone' ? 'text-[12px]' : 'text-[16px] text-right'} text-[#2F80ED] font-helvetical`}>View insights</Text>
            </TouchableOpacity>
        </View>
      </View>
      <View className={`py-5 pr-5 ${  screenSize === 'tablet' && 'pl-5' } flex-1`}>
         {
          screenSize === 'tablet' ? (
            <View>
              <Text>Reeach ID</Text>
              <View className='flex-row items-center'>
                <Text className={`font-helvetical-bold  'text-[16px]' `}> reeach </Text>
                <View className='rounded-full w-[4px] h-[4px] bg-black mx-1'/>
                <Text className={`font-helvetical 'text-[16px]' text-[#828282]`}>{ auth?.user.reeachId }</Text>
            </View>
            </View>
          ) : (
             <View className='flex-row justify-end items-center'> 
               <AntDesign name="qrcode" size={20} color="black" />
               <Text className='font-helvetical text-[12px] ml-2 w-[80px]'
               >{ auth?.user.reeachId }</Text>
             </View>
          )
         }
         <View className={`justify-end flex-row mt-2`}>
          <TouchableOpacity>
            <Text className={`${screenSize === 'phone' ? 'text-[12px]' : 'text-[16px] text-right '} mr-8 text-[#2F80ED] font-helvetical`}>Change</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className={`${screenSize === 'phone' ? 'text-[12px]' : 'text-[16px] text-right'} text-[#2F80ED] font-helvetical`}>Share</Text>
          </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

export default ReeachInsight