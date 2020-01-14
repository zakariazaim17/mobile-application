import React from 'react';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

const ListItem = (props) => {

  return (
    <TouchableOpacity>
            <View style={styles.container}>
            <Image
              style={styles.image}
              source={{uri: item.thumbnails.w160}}
            />
            <View style= {styles.details}>
              <Text style= {styles.titles}>{item.title}</Text>
              <Text style= {styles.description}>{item.description}</Text>
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
