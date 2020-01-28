import React from 'react';
import { Container, Header, Content,  CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Card } from 'native-base';
import { Image }   from 'react-native';
import { useState, useEffect } from "react";

import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import Login from '../views/Login';
import useSignUpForm from '../components/LoginHooks';

const mediaURL= "http://media.mw.metropolia.fi/wbma/uploads/";

const Profile = (props) => {
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const usertoState = async ()=> {

    const userfromStorage = await AsyncStorage.getItem('user');
    console.log("14", userfromStorage);
    setUser(JSON.parse(userfromStorage));
    const profilefromStorage = await AsyncStorage.getItem('profile');
    console.log(JSON.parse(profilefromStorage)[0]);
    setProfile(JSON.parse(profilefromStorage)[0]);


  };
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Auth');
  };

  useEffect(() => {
    usertoState();
  }, []);

  return (
    <Container>

       <Card style={{flex:0}}>
         <CardItem>
           <Left>
             <Icon name="person"/>
             <Text>Username: {user.username}</Text>

           </Left>
         </CardItem>

       </Card>

       <Card style={{flex:0}}>
         <CardItem>
           <Body>
              <Image
                square
                source={{uri: mediaURL + profile.filename}}
                style={{height:300, width:300}}
                />
                <Text>Fullname: {user.fullname}</Text>
                <Text>Email: {user.email}</Text>
            </Body>
         </CardItem>

       </Card>
       <Card style={{flex:0}}>
         <CardItem>
         <Button  onPress={signOutAsync} >
           <Text>Sign_out</Text>
         </Button>

        </CardItem>
      </Card>

    </Container>





  );
};



Profile.propTypes = {
  style: PropTypes.object,
};

export default Profile;
