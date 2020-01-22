import React from 'react';
import { useState, useEffect } from "react";
import {StyleSheet, View, Text, Button} from 'react-native';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import Login from '../views/Login';
import useSignUpForm from '../components/LoginHooks';

const Profile = (props) => {
  const [user, setUser] = useState({});
  const usertoState = async ()=> {

    const userfromStorage = await AsyncStorage.getItem('user');
    console.log("14", userfromStorage);
    setUser(JSON.parse(userfromStorage));
  };
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  useEffect(() => {
    usertoState();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>Username: {user.username} </Text>
      <Text>FullName: {user.full_name}</Text>
      <Text>Email: {user.email}</Text>
      <Button title="Logout!" onPress={signOutAsync} />
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
  },
});

Profile.propTypes = {
  style: PropTypes.object,
};

export default Profile;
