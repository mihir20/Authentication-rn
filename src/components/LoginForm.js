import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './common/Input';


class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

onButtonPress() {
  const { email, password } = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(() => {
      this.setState({ error: 'Authentication Failed' });
    }
  );
  }
  );
}


  render() {
    return (
      <Card>
        <CardItem >
<Input
placeholder="user@email.com"
lable="Email"
value={this.state.email}
onChangeText={email => this.setState({ email })}
/>
        </ CardItem >
        <CardItem >
<Input
ifSecure
placeholder="password"
lable="Password"
value={this.state.password}
onChangeText={password => this.setState({ password })}
/>
        </ CardItem >
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardItem>

          <Button
          onPress={this.onButtonPress.bind(this)}
          >Log In</Button>
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};

export default LoginForm;
