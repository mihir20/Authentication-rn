import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const LoadingSpinner = () => (
  <View style={styles.SpinnerStyle}>
       <ActivityIndicator />
  </View>);
const styles = {
  SpinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
export default LoadingSpinner;
