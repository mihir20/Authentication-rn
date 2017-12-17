import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/Header';
import Button from './src/components/common/Button';
import LoginForm from './src/components/LoginForm';
import LoadingSpinner from './src/components/common/LoadingSpinner';

class App extends Component {


  state = { logIn: null } ;


  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyA8Nwkhgd4D142V_E0aDUZQ3UcDe7wC2k8',
    authDomain: 'auth-3cbc8.firebaseapp.com',
    databaseURL: 'https://auth-3cbc8.firebaseio.com',
    projectId: 'auth-3cbc8',
    storageBucket: '',
    messagingSenderId: '239509440223'
  });

  firebase.auth().onAuthStateChanged((user) => {
       if (user) {
         this.setState({ loggedIn: true });
       } else {
         this.setState({ loggedIn: false });
       }
     });
   }

   renderContent() {
     switch (this.state.loggedIn) {
       case true:
         return (<View style={{ height: 40 }}>
           <Button onPress={() => firebase.auth().signOut()}>
             Logout
           </Button>
         </View>);
       case false:
         return <LoginForm />;
       default:
         return <LoadingSpinner size="large" />;
     }
   }

   render() {
     return (
       <View>
         <Header headerText="Authentication" />
         {this.renderContent()}
       </View>
     );
   }
 }

 export default App;
