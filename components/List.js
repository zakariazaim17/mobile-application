import React, {useContext} from 'react';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContexts';
import {getAllMedia} from '../hooks/APIHooks';
const List = (props) => {
 const [media, setMedia] = useContext(MediaContext);
 const [data, loading] = getAllMedia();

 setMedia(data);
  return (
    <View style={{marginTop: 19}}>
    <FlatList
    data={media}
    keyExtractor={(item, index) => index.toString()}

      renderItem={
        ({item}) =>

      <ListItem
      navigation ={props.navigation}
      item={item} />

      }
      />


     </View>
  );
};

List.propTypes = {
  style: PropTypes.object,
};
export default List;
