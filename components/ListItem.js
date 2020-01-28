import React from 'react';
import Single from '../views/Single';
import PropTypes from 'prop-types';

import { Container, Header, Content, List, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {ListItem as Listi} from 'native-base';
import {StyleSheet, View, FlatList, TouchableOpacity, Image} from 'react-native';

const mediaURL= "http://media.mw.metropolia.fi/wbma/uploads/"
const ListItem = (props) => {
//console.log(props);
  return (

<Listi thumbnail>
              <Left>
                <Thumbnail square source={{uri:mediaURL + props.item.thumbnails.w160}} />
              </Left>
              <Body>
                <Text>{props.item.title}</Text>
                <Text note numberOfLines={1}>{props.item.description}</Text>
              </Body>
              <Right>

                <Button rounded success
                onPress={
                  ()=> {
                    props.navigation.push('Single', {file: props.item.filename, title:props.item.title, description:props.item.description} );
                  }
                }>
                  <Text>View</Text>
                </Button>

              </Right>
            </Listi>


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
