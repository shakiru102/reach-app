import { Motion } from '@legendapp/motion'
import React, { FC, ReactDOM, ReactElement } from 'react'
import { KeyboardType } from 'react-native';
import { OutlinedTextField } from 'rn-material-ui-textfield'
import { screenSize } from '../../constants';

interface FormInputProps {
  label: string;
  keyboardType: KeyboardType,
  value: string;
  onChangeText: (e?: any) => void;
  secureTextEntry?: boolean;
  renderRightAccessory?: () => ReactElement
}


const FormInput: FC<FormInputProps> = ({
  keyboardType,
  label,
  onChangeText,
  value,
  secureTextEntry,
  renderRightAccessory
}) => { 
  return (
    <Motion.View className={` m-2`}>
      <OutlinedTextField 
       label={label}
       keyboardType={keyboardType}
       value={value}
       onChangeText={onChangeText}
       activeLineWidth={0.5}
       inputContainerStyle={{
        height: screenSize === 'phone' ? 31.66 : 48
       }}
       containerStyle={{
        height: screenSize === 'phone' ? 31.66 : 48
       }}
       lineWidth={0.5}
       tintColor={'#2F80ED'}
       fontSize={screenSize === 'phone' ? 12.52 : 16}
       labelFontSize={screenSize === 'phone' ? 12.52 : 16}
       baseColor={ value ?'#BDBDBD' : 'rgba(0, 0, 0, .38)'}
      labelOffset={{
        y0: screenSize === 'phone' ? -10 : 0,
      }}
      contentInset={{
        input: screenSize === 'phone' ? 8 : 16
      }}
      secureTextEntry={secureTextEntry}
      renderRightAccessory={renderRightAccessory}
      />
    </Motion.View>
  )
}

export default FormInput