import React, {useContext, useEffect, useState}  from 'react';
import { AsyncStorage } from 'react-native';
import {
  List as BaseList, Spinner, View,
} from 'native-base';
import { NavigationEvents } from 'react-navigation';


import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContexts';
import {getAllMedia, getUserMedia} from '../hooks/APIHooks';
import PropTypes from 'prop-types';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(true);

  const getMedia = async (mode) => {
    try {
      console.log('mode', mode);
      const allData = await getAllMedia();
      const token = await AsyncStorage.getItem('userToken');
      const myData = await getUserMedia(token);
      setMedia({
        allFiles: allData.reverse(),
        myFiles: myData,
      });
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMedia(props.mode);
  }, []);

  return (
    <View>
      {loading ? (
        <Spinner/>
      ) : (
        <>

        {props.mode === 'all' &&
          <BaseList
            dataArray={media.allFiles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ListItem
              navigation={props.navigation}
              item={item}
              mode={props.mode}
              getMedia={getMedia}
            />}
          />
          }
          {props.mode === 'myfiles' &&
          <BaseList
            dataArray={media.myFiles}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => <ListItem
              navigation={props.navigation}
             item={item}
              mode={props.mode}
              getMedia={getMedia}
            />}
          />
          }
        </>

      )}
    </View>
  );
};

List.propTypes = {
  navigation: PropTypes.object,
  mode: PropTypes.string,
};

export default List;
