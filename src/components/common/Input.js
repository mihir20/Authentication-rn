import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, ifSecure }) => (
    <View style={styles.containerStyle}>
       <Text style={styles.lableStyle}>{label}</Text>
       <TextInput
       secureTextEntry={ifSecure}
       placeholder={placeholder}
       autoCorrect={false}
       style={styles.inputStyle}
       value={value}
       onChangeText={onChangeText}
       />
    </View>
  );
  const styles = {
      inputStyle: {
        height: 40,
        color: '#000',
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
      },
      lableStyle: {
        fontStyle: 'normal',
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
      },
      containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }
  };

  export default Input;
