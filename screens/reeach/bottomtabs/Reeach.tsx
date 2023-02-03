import { View, Text, SafeAreaView, Touchable, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { FC, useState } from 'react'
import { Motion } from '@legendapp/motion'
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import { ReeachBottomTabsPramsList } from '../../../interface'
import ReeachInsight from '../../../components/reeach/ReeachInsight'
import CurrentSales from '../../../components/reeach/CurrentSales'
import { platform, screenSize, statusbarHeight } from '../../../constants'
import EmptyIndicator from '../../../components/common/EmptyIndicator'
import ActiveOrderCard from '../../../components/reeach/ActiveOrderCard'
import MenuCard from '../../../components/reeach/MenuCard'
import InDemandCard from '../../../components/reeach/InDemandCard'
import CustomerCard from '../../../components/reeach/CustomerCard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { setFocusMode } from '../../../store/reducer/utilitySlice'

type Props = BottomTabScreenProps<ReeachBottomTabsPramsList, 'home'>

const Reeach: FC<Props> = ({
    navigation
}) => {

  const { focusMode } = useSelector((state: RootState) => state.utilities)
  const dispatch = useDispatch()
  

  return (
    <SafeAreaView 
    className='flex-1 bg-white' >
      <Motion.ScrollView showsVerticalScrollIndicator={false}>
              <Motion.View
              className={'overflow-hidden'}
              animate={ focusMode ? {
                maxHeight: 0,
                opacity: 0
              } : {
               maxHeight: 89,
               opacity: 1
              }}
              transition={{
                type: 'spring',
                bounciness: 0
              }}
              >
                  <ReeachInsight insightStatus={'Bland'}/>
              </Motion.View>
              <CurrentSales />

             {/* Active Orders */}

              <View className='flex-row justify-between px-5 pt-5 mb-3'>
                <View>
                  <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[18px]' : 'text-[24px]' }`}>Active orders</Text>
                  <Text className={` font-helvetical text-[#4F4F4F] ${ screenSize === 'phone' ? 'text-[12px]' : 'text-[16px]' }`}>0 items</Text>
                </View>
                <View>
                  <TouchableOpacity
                  onPress={() => dispatch(setFocusMode())}
                  className={`shadow-sm ${ platform === 'ios' ? 'shadow-[rgba(0,0,0,0.12)]' : 'shadow-black' }  bg-white rounded-full`}
                  >
                    <Motion.Text 
                    className={` font-helvetical p-2 text-center text-[#2F80ED] ${ screenSize === 'phone' ? 'text-[10px]' : 'text-[16px]' }`}
                    >{ !focusMode ? 'Focus mode' : 'Details mode' }</Motion.Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View className='border-b-[0.3px] border-[#BDBDBD]'>
              <FlatList
              data={!focusMode ? [] : [1, 2, 3]}
              renderItem={() => <ActiveOrderCard />}
              // className={`${ screenSize === 'phone' ? 'h-[250px]' : 'h-[450px]'} p-5 `} 
              showsVerticalScrollIndicator={false}
              horizontal={focusMode}
              contentContainerStyle={{
                paddingRight: 28
              }}
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={() => (
                <EmptyIndicator
                buttonTitle='Set up your menu'
                emptyContent='Customers cannot book or order from you 
                because you don’t have a menu.'
                emptyTitle='You have no active orders'
                emptyType='order'
                 onPress={() => {}}
                />
              )}
              />
              <TouchableOpacity>
                <Text className={`text-right font-helvetical pr-5 my-3 text-[#2F80ED] ${ screenSize === 'phone' ? 'text-[10pxs]' : 'text-[14px]' }`}> See all orders </Text>
              </TouchableOpacity>
              </View>

              

              {/* Menu */}

              <View className='flex-row justify-between px-5 pt-5'>
                <View>
                  <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[18px]' : 'text-[24px]' }`}>My menu</Text>
                  <Text className={` font-helvetical text-[#4F4F4F] ${ screenSize === 'phone' ? 'text-[12px]' : 'text-[16px]' }`}>0 items</Text>
                </View>
              </View>

              <View className='px-5 border-b-[0.3px] border-[#BDBDBD]'>
              <FlatList
              data={!focusMode ? [] : [1, 2, 3]}
              renderItem={() => <MenuCard/>}
              className={'py-5'}
              columnWrapperStyle={{ margin: 1 }}
              numColumns={ screenSize === 'phone' ? 2 : 3 }
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <EmptyIndicator
                buttonTitle='Set up your menu'
                emptyContent='When you have a menu, all the foods
                that you sell will appear here.'
                emptyTitle='Your menu list is empty'
                emptyType='menu'
                 onPress={() => {}}
                />
              )}
              />
              <TouchableOpacity>
                <Text className={`text-right font-helvetical pr-5 my-3 text-[#2F80ED] ${ screenSize === 'phone' ? 'text-[10pxs]' : 'text-[14px]' }`}> See all menu items </Text>
              </TouchableOpacity>
              </View>
              

              {/* Demand Item */}

              <View className='flex-row justify-between px-5 pt-5'>
                <View>
                  <Text className={`font-helvetical-bold ${ screenSize === 'phone' ? 'text-[18px]' : 'text-[24px]' }`}>Top 3 in-demand items</Text>
                </View>
              </View>

              <FlatList
              data={!focusMode ? [] : [1, 2, 3]}
              renderItem={() => <InDemandCard />}
              className={'p-5 border-b-[0.3px] border-[#BDBDBD]'}
              horizontal={ screenSize === 'tablet' }
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <EmptyIndicator
                buttonTitle='Set up your menu'
                emptyContent='The top 3 most ordered or in-demand foods will appear here when people start buying from you'
                emptyTitle='You have no demand yet'
                emptyType='demand-item'
                 onPress={() => {}}
                />
              )}
              />

              {/* Buyer */}

              <View className='flex-row justify-between px-5 pt-5 items-center'>
                  <Text className={` font-helvetical-bold ${ screenSize === 'phone' ? 'text-[18px]' : 'text-[24px]' }`}>My Top 5 buyers</Text>
                <TouchableOpacity>
                    <Text className={`text-right font-helvetical my-3 text-[#2F80ED] ${ screenSize === 'phone' ? 'text-[10pxs]' : 'text-[14px]' }`}> See all customers</Text>
                  </TouchableOpacity>
              </View>
             
              <FlatList
              data={!focusMode ? [] : [1, 2, 3]}
              renderItem={() => <CustomerCard />}
              className={'p-5'}
              horizontal={!focusMode ? false : true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingRight: 28
              }}
              ListEmptyComponent={() => (
                <EmptyIndicator
                buttonTitle='Set up your menu'
                emptyContent='Your top 5 buyers will appear here after a while.But you have to set up your menu to attract buyers'
                emptyTitle='You have no buyers'
                emptyType='buyer'
                 onPress={() => {}}
                />
              )}
              />
              
          </Motion.ScrollView>
    </SafeAreaView>
  )
}

export default Reeach