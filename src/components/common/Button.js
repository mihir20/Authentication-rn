import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => (
  //onPress is passed as a prop
  //TouchableOpacity makes touch feel like click
    <TouchableOpacity
onPress={onPress}//onPress passed as a prop is used in original onPress
    style={styles.buttonStyle}
    >
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );


 const styles = {
   textStyle: {
     alignSelf: 'center',
     color: '#007aff',
     paddingTop: 10,
     paddingBottom: 10,
     fontSize: 16,
     fontWeight: '600'
   },
   buttonStyle: {
     flex: 1,
     alignSelf: 'stretch',
     backgroundColor: '#fff',
     borderRadius: 5,
     borderWidth: 1,
     borderColor: '#007aff',
     marginLeft: 5,
     marginRight: 5
   }
 };
 export default Button;
