import React, {useContext} from 'react';

import {Image} from 'react-native';
import{List as BaseList} from 'native-base';
import PropTypes from 'prop-types';



import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContexts';
import {getAllMedia} from '../hooks/APIHooks';


const List = (props) => {
 const [media, setMedia] = useContext(MediaContext);
 const [data, loading] = getAllMedia();

 setMedia(data);
  return (

    <BaseList
    dataArray={media}
    keyExtractor={(item, index) => index.toString()}

      renderItem={
        ({item}) =>

      <ListItem
      navigation ={props.navigation}
      item={item} />

      }
      />



  );
};

List.propTypes = {
  style: PropTypes.object,
};
export default List;
