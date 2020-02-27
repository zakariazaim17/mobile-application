import React, { Component } from 'react';

import List  from '../components/List' ;
import PropTypes from 'prop-types';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form } from 'native-base';




const MyFiles = (props) => {

  const {navigation} = props;
  return (

      <List navigation={navigation} mode={'myfiles'}/>

  );
};

MyFiles.propTypes = {
  style: PropTypes.object,
};

export default MyFiles;
