import { AnimatePresence, Motion } from '@legendapp/motion'
import React, { FC } from 'react'
import { signupHookProps } from '../../hooks/auth/signupHook'
import FormInput from '../common/FormInput'
import PhonenumberAccessory from './PhonenumberAccessory'
import { Formik, FormikValues } from 'formik'
import VerifyPhonenummber from './VerifyPhonenummber'
import { Text, View } from 'react-native'
import CheckBox from 'expo-checkbox'
import ReeachButton from '../common/ReeachButton'
import PasswordStrength from './PasswordStrength'
import PasswordAccessory from './PasswordAccessory'
import { initiateSignup } from '../../api/auth/auth'
import { Snackbar } from 'react-native-paper'




const SignupForm: FC<signupHookProps> = ({
    phonenumberBtnState,
    setPhonenumberBtnState,
    setVerifyPhonenumber,
    verifyPhonenumber,
    signupSchema,
    initiatePhonenumberVerification,
    confirmOtp,
    setConfirmOtp,
    initiateConfirmOtp,
    initiateResendOtp,
    countdown,
    setCountdown,
    clear,
    setclear,
    passwordBtn,
    setPasswordBtn,
    passwordHint,
    setPasswordHint,
    initiateUserSignup,
    error,
    errorText,
    setError,
    loading
}) => {



  return (
    <>
   
        <Formik
    initialValues={{
        firstName: '',
        lastName:'',
        phoneNumber: '',
        password:'',
        verified: false,
        tsp: false,
        nob: ''
    }}
    validationSchema={signupSchema}
    onSubmit={({
        firstName,
        lastName,
        nob,
        password,
        phoneNumber,
    }) => {
        initiateUserSignup({ businessName: nob, firstName, lastName, password, phoneNumber })
        
    }}
    validateOnMount
    >
    {({ 
        values, 
        handleChange,
        setFieldValue,
        isValid,
        handleSubmit
     }) => (
        <Motion.View className='p-2 bg-white'>
        <Motion.View className={`flex-row `}>
           <Motion.View className={`flex-1`}>
                <FormInput
                keyboardType='default'
                label='First name'
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                />
           </Motion.View>
            <Motion.View className={`flex-1`}>
                <FormInput
                keyboardType='default'
                label='Last name'
                onChangeText={handleChange('lastName')}
                value={values.lastName}
                />
            </Motion.View>
        </Motion.View>
        <FormInput 
         keyboardType='phone-pad'
         label='Phone number'
         onChangeText={(v) => {

            setFieldValue('phoneNumber', v)
            const validNumber = /^(0)?[7-9][0-1]\d{8}$/gm.test(v)
            if (validNumber) setPhonenumberBtnState('initiate verification')  
            else {
              setPhonenumberBtnState('none')
              setVerifyPhonenumber(false)
              setConfirmOtp('none')
            } 
            
         }}
         value={values.phoneNumber}
         renderRightAccessory={() => <PhonenumberAccessory activeState={phonenumberBtnState} onInitiateVerification={() => initiatePhonenumberVerification(values.phoneNumber)} />}
        />

        <Motion.View
        className={'border-[#E0E0E0] mx-2 rounded-b-[4px] -top-1'}
        animate={ !verifyPhonenumber ? {
            minHeight: 0,
            opacity: 0,
            padding: 0,
            borderWidth: 0,
        } : {
            minHeight: 200,
            opacity: 1,
            borderWidth: 0.5
        }}
        transition={{
            type: 'spring',
            
        }}
        >
        <AnimatePresence>
         { verifyPhonenumber &&
          
            <VerifyPhonenummber 
          clear={clear}
          initiateClear={(v) => setclear(v)}
          initiateConfirmOtp={(code) => {
          
            const result = initiateConfirmOtp(code)
            if(result?.fieldValue) setFieldValue('verified', result.fieldValue)
        }}
          confirmOtp={confirmOtp}
          initiateResendOtp={() => initiateResendOtp(values.phoneNumber)}
          countdown={countdown}
         />
         }
          </AnimatePresence>
        </Motion.View>

            <FormInput 
            keyboardType='default'
            label='Name of your business'
            onChangeText={handleChange('nob')}
            value={values.nob}
            />
            <FormInput 
            keyboardType='default'
            label='Password'
            onChangeText={(v) => {
                const isStrength =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*"'()+,-./:;<=>?[\]^_`{|}~])(?=.{8,})/.test(v)
                setFieldValue('password', v)
                if (v)  {
                    setPasswordHint(true) 
                    setVerifyPhonenumber(false)
                }
                else setPasswordHint(false)
                if(isStrength) {
                    setTimeout(() => {
                       setPasswordHint(false)
                    }, 2000)
                }

                    
            }}
            value={values.password}
            secureTextEntry={!passwordBtn}
             renderRightAccessory={() => <PasswordAccessory btn={passwordBtn} btntoggle={() => setPasswordBtn(prev => !prev)} />}
            />
            <Motion.View
        className={'border-[#E0E0E0] mx-2 rounded-b-[4px] -top-1'}
        animate={ !passwordHint ? {
            minHeight: 0,
            opacity: 0,
            padding: 0,
            borderWidth: 0,
        } : {
            minHeight: 200,
            opacity: 1,
            borderWidth: 0.5,
            padding: 4
        }}
        transition={{
            type: 'spring',
            
        }}
        >
          <AnimatePresence>
         { passwordHint &&
            <PasswordStrength 
            password={values.password}
            />
         }
          </AnimatePresence>
        </Motion.View>
            <View className='px-2 flex-row mt-3 items-center'>
               <CheckBox
               value={values.tsp}
               style={{
                height: 15,
                width: 15
               }}
                onValueChange={(v: boolean) => setFieldValue('tsp', v)}
                className={'border-[1px] border-[#49454F]'}
               />
               <Text className="font-helvertica text-[#4F4F4F] text-[12.52px] md:text-[16px] ml-2 pr-2">
               I accept Reeach's 
               <Text className='text-[#2F80ED]'>{' '} Terms of Service {' '}</Text>
               and
               <Text className='text-[#2F80ED]'>{' '} Privacy Policy</Text>
               </Text>
            </View>
            <View className='flex-row mt-8 px-2'>
            <View className='flex-1' />
            <ReeachButton
            disabled={!isValid}
              onPress={handleSubmit}
              title='Join'
              loading={loading}

            />
            </View>
        </Motion.View>
    )}
  
    </Formik>
    </>
    
  )
}

export default SignupForm