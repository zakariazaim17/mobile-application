import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import PropTypes from 'prop-types';

const mediaURL= "http://media.mw.metropolia.fi/wbma/uploads/"
const Single = (props) => {
  console.log(props.filename);
  const { navigation } = props;
  const fili = navigation.getParam('file', 'not found');
  console.log(fili);
  return (
    <View style={styles.container}>
      <Image
      style = {{
        width:100,
        height:100,
      }}
      source = {{uri:mediaURL + fili}}
      >

        </Image>
      <Text>
        title: {JSON.stringify(navigation.getParam('title', 'not found'))}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Single.propTypes = {
  style: PropTypes.object,
};

export default Single;
