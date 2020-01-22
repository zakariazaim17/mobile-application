import React from 'react';
import Single from '../views/Single';
import PropTypes from 'prop-types';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

const mediaURL= "http://media.mw.metropolia.fi/wbma/uploads/"
const ListItem = (props) => {
console.log(props);
  return (
    <TouchableOpacity
    onPress={
      ()=> {
        props.navigation.push('Single', {file: props.item.filename, title:props.item.title} );
      }
    }
    >

            <View style={styles.container}>
            <Image

              style={styles.image}
              source={{uri:mediaURL + props.item.thumbnails.w160}}
            />
            <View style= {styles.details}>
              <Text style= {styles.titles}>{props.item.title}</Text>
              <Text style= {styles.description}>{props.item.description}</Text>
            </View>
            </View>
          </TouchableOpacity>
  )
}



    const styles = StyleSheet.create({
      container: {
        marginTop: 5,
        paddingTop: 10,
        flexDirection: 'row',
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
      },
      description: {
         fontSize: 11,
      },
      image: {
        width: '20%',
        flex: 1,
        height: 200,
        flexDirection: 'row',
        margin: 10,

      },
       titles: {
       fontWeight: 'bold',
      },
       details: {
        width: '45%',
        flex: 1,
        flexDirection: 'column',
        padding: 10,
      }
    });

    ListItem.propTypes = {
      style: PropTypes.object,
    };
    export default ListItem;
