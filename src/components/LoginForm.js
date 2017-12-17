import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './common/Input';
import LoadingSpinner from './common/LoadingSpinner';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', login: false };


onButtonPress() {
  this.setState({ error: '', login: null });
  const { email, password } = this.state;
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(this.onLoginSucess.bind(this))
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(this.onLoginSucess.bind(this))
    .catch(() => {
      this.onLoginFail.bind(this);
    }
  );
  }
  );
}

onLoginSucess() {
  this.setState({ login: true, email: '', password: '' });
}
onLoginFail() {
  this.setState({ login: false });
}
whileLogingView() {
  switch (this.state.login) {
    case null:
      return <LoadingSpinner />;
      case false:
        this.setState({ error: 'Authentication Failed' });
        return (<View>
           <Text style={styles.errorTextStyle}>{this.state.error}
          </Text>
          <Button
          onPress={this.onButtonPress.bind(this)}
          >Log In</Button>
        </View>);
    default:
      return (<Button
      onPress={this.onButtonPress.bind(this)}
      >Log In</Button>);
  }
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
        <CardItem>
        {this.whileLogingView()}

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
