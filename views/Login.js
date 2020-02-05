import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Label, Text, Card, CardItem, Body, Title, H2 } from 'native-base';
import { useState, useEffect } from "react";
import {AsyncStorage} from 'react-native';
import  {fetchGET, fetchPOST, fetchprof} from '../hooks/APIHooks';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/LoginHooks';

const Login = (props) => {
  const [toggleForm, setToggleForm] = useState(true);


  const {
    handleUsernameChange,
    handlePasswordChange,
    handleEmailChange,
    handleFullnameChange,
    handleConfirmPasswordChange,
    validateField,
    validateOnSend,
    checkAvail,
    inputs,
    errors,
    setErrors,
  } = useSignUpForm();




  // props is needed for navigation


  const validationProperties = {
    username: {username: inputs.username},
    email: {email: inputs.email},
    full_name: {full_name: inputs.full_name},
    password: {password: inputs.password},
    confirmPassword: {
      password: inputs.password,
      confirmPassword: inputs.confirmPassword,
    },
  };








  const signInAsync = async () => {
    try {
      const user = await fetchPOST('login', inputs);

      console.log('login', user);
      await AsyncStorage.setItem('userToken', user.token);
      await AsyncStorage.setItem('user', JSON.stringify(user.user));
      const prof = await fetchprof(user.user.user_id);
      console.log('kkkkkk' + prof);
      await AsyncStorage.setItem('profile', JSON.stringify(prof));

      props.navigation.navigate('App');
    } catch(e){
      console.log('signInAsync error: ' + e.message);
      console.log(e.message);
      setErrors((errors) =>
      ({
        ...errors,
        fetch: e.message,
      }));
  }
    };












    const RegisterAsync = async () => {
      const regValid = validateOnSend(validationProperties);
      console.log('reg field errors', errors);

      if (!regValid) {
        return;
      }
      try {
        console.log('sen inputs', inputs);
        const user = inputs;
      delete user.confirmPassword;
      const result = await fetchPOST('users', user);

       console.log('register', result);
       signInAsync();
      }
       catch(e){
        console.log('registerAsync error: ', e.message);
        setErrors((errors) =>
        ({
          ...errors,
          fetch: e.message,
        }));
    }
      };
   return (
     <Container>
       <Header>
       <Body><Title>MyApp</Title></Body>
       </Header>
       <Content>
       {/* login form */}
       {toggleForm &&
        <Form>
          <Title>
            <H2>Login</H2>
          </Title>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.username}
              placeholder='username'
              onChangeText={handleUsernameChange}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.password}
              placeholder='password'
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
            />
          </Item>
          <Button full onPress={signInAsync}><Text>Sign in!</Text></Button>
          <Button dark full onPress={() => {
            setToggleForm(false);
          }}>
            <Text>or Register</Text>
          </Button>
        </Form>
        }

        {/* register form */}
        {!toggleForm &&
        <Form>
          <Title>
            <H2>Register</H2>
          </Title>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.username}
              placeholder='username'
              onChangeText={handleUsernameChange}
              onEndEditing={() => {
                checkAvail();
                validateField(validationProperties.username);
              }}
             // error={errors.username}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.email}
              placeholder='email'
              onChangeText={handleEmailChange}
              onEndEditing={() => {
                validateField(validationProperties.email);
              }}
              //error={errors.email}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.full_name}
              placeholder='fullname'
              onChangeText={handleFullnameChange}
              onEndEditing={() => {
                validateField(validationProperties.full_name);
              }}
             // error={errors.full_name}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.password}
              placeholder='password'
              secureTextEntry={true}
              onChangeText={handlePasswordChange}
              onEndEditing={() => {
                validateField(validationProperties.password);
              }}
            //  error={errors.password}
            />
          </Item>
          <Item>
            <FormTextInput
              autoCapitalize='none'
              value={inputs.confirmPassword}
              placeholder='confirm password'
              secureTextEntry={true}
              onChangeText={handleConfirmPasswordChange}
              onEndEditing={() => {
                validateField(validationProperties.confirmPassword);
              }}
             // error={errors.confirmPassword}
            />
          </Item>
          <Button full onPress={RegisterAsync}>
            <Text>Register!</Text>
          </Button>
          <Button dark full onPress={() => {
            setToggleForm(true);
          }}>
            <Text>or Login</Text>
          </Button>
        </Form>
        }

      </Content>
   </Container>
   );
 };



 /*const styles = StyleSheet.create({
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
*/

Login.propTypes = {
  style: PropTypes.object,
};

// proptypes here

export default Login;



/*<FormTextInput
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
       } />*/
