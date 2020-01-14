import React from 'react';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import ListItem from './ListItem.js';
const List = (props) => {
  console.log(props);
  return (
    <FlatList
    data={mediaArray}
      renderItem={({item}) => {
        <ListItem singleMedia={item} />
      }}
      />

  );
};

