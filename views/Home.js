import React, { Component } from 'react';

import List  from '../components/List' ;
import PropTypes from 'prop-types';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form } from 'native-base';




const Home = (props) => {

  const {navigation} = props;
  return (

    <Container>


    <List navigation={navigation}/>

    </Container>

  );
};

Home.propTypes = {
  style: PropTypes.object,
};

export default Home;
