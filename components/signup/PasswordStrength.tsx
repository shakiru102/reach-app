import React, { FC, useMemo } from 'react'
import { Text, View } from 'react-native'
import { screenSize } from '../../constants'
import { passwordStrength } from "check-password-strength";
import { AntDesign } from '@expo/vector-icons';

interface PasswordValue {
    password: string
}
type PassStrengthProp = 'Weak' | 'Medium' | 'Strong' | 'Too weak'

const PasswordStrength: FC<PasswordValue> = ({
    password
}) => {

    const passStrength: PassStrengthProp = useMemo((): any => passwordStrength(password).value,[password])

  return (
    <View className='p-4'>
     <View > 
        <Text className={`${ screenSize === 'phone' ? 'text-[11.95px]' : 'text-[18px]' } font-helvetical-bold`}>Create a strong password</Text>
        <Text className={`${ screenSize === 'phone' ? 'text-[10.62px] ' : 'text-[16px]' } font-helvetical text-[#000000]`}>Use at least:</Text>
     </View>
     <View
     className='py-3 flex-row justify-between items-center'
     >
      <Text className={`${ screenSize === 'phone' ? 'text-[10.62px] ' : 'text-[16px]' } text-[#333333] font-helvetical`}>
      8 Characters
      </Text>
      <Text>
      { /^(?=.{8,})/.test(password) ? <AntDesign name="checkcircle" size={18} color="#27AE60" /> : <AntDesign name="closecircleo" size={18} color="#333333" /> }
      </Text>
     </View>

     <View
     className='py-3 border-t-[0.5px] border-[#E0E0E0] flex-row justify-between items-center'
     >
      <Text className={`${ screenSize === 'phone' ? 'text-[10.62px] ' : 'text-[16px]' } text-[#333333] font-helvetical`}>
      One capital letter
      </Text>
      <Text>
      { /^(?=.*[A-Z])/.test(password) ? <AntDesign name="checkcircle" size={18} color="#27AE60" /> : <AntDesign name="closecircleo" size={18} color="#333333" /> }
      </Text>
     </View>

     <View
     className='py-3 border-t-[0.5px] border-[#E0E0E0] flex-row justify-between items-center'
     >
      <Text className={`${ screenSize === 'phone' ? 'text-[10.62px] ' : 'text-[16px]' } text-[#333333] font-helvetical`}>
      One number
      </Text>
      <Text>
      { /^(?=.*[0-9])/.test(password) ? <AntDesign name="checkcircle" size={18} color="#27AE60" /> : <AntDesign name="closecircleo" size={18} color="#333333" /> }
      </Text>
     </View>

     <View
     className='py-3 border-t-[0.5px] border-[#E0E0E0] flex-row justify-between items-center'
     >
      <Text className={`${ screenSize === 'phone' ? 'text-[10.62px] ' : 'text-[16px]' } text-[#333333] font-helvetical`}>
      One special character like  {' <   >  ?   /   #  *  @'}
      </Text>
      <Text>
      { /[^A-z\s\d][\\\^]?/g.test(password) ? <AntDesign name="checkcircle" size={18} color="#27AE60" /> : <AntDesign name="closecircleo" size={18} color="#333333" /> }
      </Text>
     </View>

    <View className='pt-3 border-t-[0.5px] border-[#E0E0E0] '>
    {
           passStrength === 'Weak' ? <>
            <View >
               <Text className={` ${ screenSize === 'phone' ? 'text-[10.62px]' : 'text-[14px] ' } text-center font-helvetical-bold`}>
               Password strength is {' '}
                <Text className="text-orange-500">medium</Text>  
                <Text className="font-helvetical"> - Drive on!</Text>
               </Text>
                </View>
           </> : 
           passStrength === 'Medium' ? <>
           <View>
            <Text className={` ${ screenSize === 'phone' ? 'text-[10.62px]' : 'text-[14px] ' } text-center font-helvetical-bold`}>
            Password strength is {' '}
            <Text className="text-[#2F80ED]">almost there</Text>  
            <Text className="font-helvertica"> - one more push!</Text>
            </Text>
            </View>
          </> :
           passStrength === 'Strong' ? <>
           <View>
            <Text className={` ${ screenSize === 'phone' ? 'text-[10.62px]' : 'text-[14px] ' } text-[#27AE60] text-center font-helvetical-bold`}>
            Password strength is good 
            <Text className="font-helvertica text-black"> - Well done!</Text>
            </Text>
            </View>
          </>: <>
            <View >
                <Text className={` ${ screenSize === 'phone' ? 'text-[10.62px]' : 'text-[14px] ' } text-center font-helvetical-bold`}>
                Password strength is {' '}
                <Text className="text-red-500">weak</Text>  
                <Text className="font-helvetical"> - Keep going!</Text>
                </Text>
                </View>
           </>
        }

    </View>
     
    </View>
  )
}

export default PasswordStrength