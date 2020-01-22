import React from 'react';
import {View} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';





const Home = (props) => {
  const {navigation} = props;
  return (
<View>
    <List navigation={navigation}/>
    </View>
  );
};

Home.propTypes = {
  style: PropTypes.object,
};

export default Home;
