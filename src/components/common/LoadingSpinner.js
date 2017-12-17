import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingSpinner = ({ size }) => (
  <View style={styles.SpinnerStyle}>
       <ActivityIndicator size={size || 'large'} />
  </View>);
const styles = {
  SpinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
export default LoadingSpinner;
