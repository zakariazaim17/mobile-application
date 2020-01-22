import React from 'react';
import { useState, useEffect } from "react";
import {StyleSheet, View, Text, Button, AsyncStorage,} from 'react-native';
import  {login, register} from '../hooks/APIHooks';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../components/LoginHooks';
const Login = (props) => {
  // props is needed for navigation
  const [error, setError] = useState('');

  const { inputs, handleUsernameChange, handlePasswordChange, handleFullnameChange, handleEmailChange} =  useSignUpForm();
  const signInAsync = async () => {
    try {
      const user = await login(inputs.username, inputs.password);

      console.log('login', user);
      await AsyncStorage.setItem('userToken', user.token);
      await AsyncStorage.setItem('user', JSON.stringify(user.user));



      props.navigation.navigate('App');
    } catch(e){
      console.log(e.message);
    }
    };




    const RegisterAsync = async () => {
      try {
        const result = await register(inputs.username, inputs.full_name, inputs.password, inputs.email);

        console.log('register', result);
        if(!result.error){
          signInAsync();
        }else {
          setError('Please create an account')
        }


      } catch(e){
        console.log(e.message);
      }
      };
   return (
     <View style={styles.container}>

       <View style={styles.form}>
         <Text>Register</Text>
         <View>
         <FormTextInput
           autoCapitalize='none'
           placeholder='username'
           onChangeText={handleUsernameChange}
           value = {inputs.username}
         />
         <FormTextInput
           autoCapitalize='none'
           placeholder='fullName'
           onChangeText={handleFullnameChange}
           value = {inputs.full_name}
         />
         <FormTextInput
           autoCapitalize='none'
           placeholder='Password'
           onChangeText={handlePasswordChange}
           value = {inputs.password}
         />
         <FormTextInput
           autoCapitalize='none'
           placeholder='email'
           onChangeText={handleEmailChange}
           value = {inputs.email}
         />
         <Text>{error}</Text>
          <Button title="Register!" onPress={
         () => {
          RegisterAsync();
         }
       } />
         </View>
         <Text>Login</Text>
         <FormTextInput
           autoCapitalize='none'
           placeholder='username'
           onChangeText={handleUsernameChange}
           value = {inputs.username}
         />
         <FormTextInput
           autoCapitalize='none'
           placeholder='password'
           secureTextEntry={true}
           onChangeText={handlePasswordChange}
           value = {inputs.password}
         />
       <Button title="Sign in!" onPress={
         () => {
           signInAsync();
         }
       } />
       </View>
     </View>
   );
 };



 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  }, form:{
    padding:20,
  },
});


Login.propTypes = {
  style: PropTypes.object,
};

// proptypes here

export default Login;
