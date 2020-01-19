import React from 'react';
import Constants from 'expo-constants';

import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';

import List from './components/List';

const mediaArray = [
  {
    'key': '0',
    'title': 'Title 1',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Title 2',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Title 3',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];


const App = () => {
  return (
 <View style={style123.fisrta}>
   <View style={style123.statusBar}/>
   <View style={style123.second}>

     <Image
     style={style123.imagestyle}
     source={{uri: "http://petslady.com/sites/default/files/inline-images/Flexiginger.jpg"}}
    />
    <Text style={style123.texti}>hy, take cat and go home!</Text>

   </View>

   <View style= {style123.all}>


    <List mediaArray={mediaArray} />
    </View>
    </View>

  );
};

const style123 = StyleSheet.create({
  statusBar: {
    backgroundColor: "red",
    height: Constants.statusBarHeight,
  },
  all: {
    backgroundColor: "cornsilk",
    flex:3,
  },
  fisrta:{
   flex: 1,
  },
  second:{
    flex:2,
    backgroundColor: "blue",
  },
  imagestyle:{
    flex:1,
    height:undefined,
    width:undefined,
    alignSelf:'stretch',
  },
  texti:{
    position:"absolute",
    marginLeft:15,
    marginTop:50,
    backgroundColor:'rgba(0,0,0,0.2)',
    fontWeight:"bold",
  }

  // rest of the styles
});



export default App;
