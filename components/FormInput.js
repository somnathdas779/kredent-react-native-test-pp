import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  mobileNumberStyle,
  ...rest
}) => (
  <View style={styles.inputContainer}>
    <Input
      {...rest}
      leftIcon={<AntDesign name={iconName} size={28} color={iconColor} />}
      leftIconContainerStyle={styles.iconStyle}
      placeholderTextColor='grey'
      name={name}
      placeholder={placeholder}
      inputStyle={mobileNumberStyle}
    />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    margin: 0,
    minWidth:280,
  },
  iconStyle: {
    marginRight: 10
  },
  mobileNumber: {
    color: 'gray',
    fontSize: 35
  }
})

export default FormInput
