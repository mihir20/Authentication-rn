import React, { Component } from 'react';
import Card from './common/Card';
import CardItem from './common/CardItem';
import Button from './common/Button';
import Input from './common/Input';

class LoginForm extends Component {
  state = { email: '', password: '' };
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
          <Button>Log In</Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
