import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => (

    <View style={styles.containerStyle} >
    {props.children}
    </View>

  );
  const styles = {
    containerStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      padding: 4,
      borderColor: '#ddd',
      justifyContent: 'flex-start',
      position: 'relative',
      flexDirection: 'row'
    }
  };
 export default CardItem;
