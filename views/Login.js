import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Label, Text, div } from 'native-base';
import { useState, useEffect } from "react";
import {AsyncStorage} from 'react-native';
import  {login, register, fetchprof} from '../hooks/APIHooks';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../components/LoginHooks';

const Login = (props) => {


  const Box =[
  <Form>
        <Item >
        <Label>Username</Label>
          <Input autoCapitalize='none'
            onChangeText={handleUsernameChange}
            value = {inputs.username}/>
        </Item>

        <Item>
          <Label>FullName</Label>

          <Input autoCapitalize='none'
             onChangeText={handleFullnameChange}
           value = {inputs.full_name}/>
        </Item>

        <Item>
          <Label>Password</Label>

          <Input autoCapitalize='none'
           onChangeText={handlePasswordChange}
           value = {inputs.password}/>
        </Item>
        <Item >
          <Label>email</Label>
          <Input autoCapitalize='none'
           onChangeText={handleEmailChange}
           value = {inputs.email}/>
        </Item>
        <Text>{error}</Text>
      <Button  onPress={
     () => {
      RegisterAsync();
     }
   } ><Text>Register</Text></Button>
 </Form>];


  // props is needed for navigation
  const [error, setError] = useState('');
  const [sth , setsth] = useState(Box);
  console.log('12121221' + sth);







  const { inputs, handleUsernameChange, handlePasswordChange, handleFullnameChange, handleEmailChange} =  useSignUpForm();
  const signInAsync = async () => {
    try {
      const user = await login(inputs.username, inputs.password);

     // console.log('login', user);
      await AsyncStorage.setItem('userToken', user.token);
      await AsyncStorage.setItem('user', JSON.stringify(user.user));
      const prof = await fetchprof(user.user.user_id);
      console.log('kkkkkk' + prof);
      await AsyncStorage.setItem('profile', JSON.stringify(prof));




      props.navigation.navigate('App');
    } catch(e){
      console.log(e.message);
    }
    };




    ////



const toggleDiv = () => {
  const  { show }= this.state;
  this.setState ( { show: !show});
}




    const RegisterAsync = async () => {
      try {
        const result = await register(inputs.username, inputs.full_name, inputs.password, inputs.email);

       // console.log('register', result);
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
     <Container style={{ marginTop:20,}}>

       <Button onPress= {() => setsth( whatever=> 'rrrrrrrrr')}>
         <Text>++++</Text></Button>

         <Form style={{backgroundColor:'red',
        height:100,}}><Text style={{color:'white',}}>{sth}</Text></Form>






          <Form style={{backgroundColor:'green',}}>
            <Item>
              <Label>Username</Label>
              <Input autoCapitalize='none'

           onChangeText={handleUsernameChange}
           value = {inputs.username} />
            </Item>
            <Item>
              <Label>Password</Label>
              <Input autoCapitalize='none'

           secureTextEntry={true}
           onChangeText={handlePasswordChange}
           value = {inputs.password}/>
            </Item>
            <Button onPress={
         () => {
           signInAsync();
         }
       } ><Text>Login</Text></Button>
          </Form>







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
