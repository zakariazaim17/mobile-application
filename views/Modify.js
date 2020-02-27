import React, {useState, useEffect, useContext} from 'react';
import {
  Content,
  Form,
  Button,
  Text,
  Item,
  Spinner,
} from 'native-base';

import {
  Dimensions,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import useUploadForm from '../hooks/UploadHooks';
import {MediaContext} from '../contexts/MediaContexts';
import {validateField} from '../utils/validation';
import {mediaURL} from '../constants/urlConst';
import {uploadConstraints} from '../constants/validationConst';
import AsyncImage from '../components/AsyncImage';
import {Video} from 'expo-av';

const deviceHeight = Dimensions.get('window').height;

const Modify = (props) => {
  const [media, setMedia] = useContext(MediaContext);

  const [send, setSend] = useState(false);

  const {
    handleTitleChange,
    handleDescriptionChange,
    handleModify,
    inputs,
    errors,
    setErrors,
    setInputs,
    loading,
  } = useUploadForm();

  const validationProperties = {
    title: {title: inputs.title},
    description: {description: inputs.description},
  };

  const validate = (field, value) => {
    console.log('vp', validationProperties[field]);
    setErrors((errors) =>
      ({
        ...errors,
        [field]: validateField({[field]: value},
            uploadConstraints),
        fetch: undefined,
      }));
  };



  const getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

  useEffect(() => {
    getPermissionAsync();
  }, []);



  const file = props.navigation.state.params.file;

  useEffect(() => {
    setInputs((inputs) =>
      ({
        ...inputs,
        title: file.title,
        description: file.description,
      }));
  }, []);


  const handleTitle = (text) => {
    handleTitleChange(text);
    validate('title', text);
  };

  const handleDescription = (text) => {
    handleDescriptionChange(text);
    validate('description', text);
  };

  const modify = () => {
    console.log('reg field errors', errors);
    handleModify(file.file_id, props.navigation, setMedia);
  };



  const checkErrors = () => {
    console.log('errors', errors);
    if (errors.title !== undefined ||
      errors.description !== undefined) {
      setSend(false);
    } else {
      setSend(true);
    }
  };

  useEffect(() => {
    checkErrors();
  }, [errors]);

  console.log('send', send);

  return (
    <Content>
      {loading ? (
        <Spinner/>
      ) : (
        <Form>
          <Item>
            <FormTextInput
              placeholder='Title'
              onChangeText={handleTitle}
              value={inputs.title}
              error={errors.title}
            />
          </Item>
          <Item>
            <FormTextInput
              placeholder='Description'
              onChangeText={handleDescription}
              value={inputs.description}
              error={errors.description}
            />
          </Item>

              <AsyncImage
                style={{
                  width: '100%',
                  height: deviceHeight / 3,
                }}
                spinnerColor='#777'
                source={{uri: mediaURL + file.filename}}
              />

          {send &&
          <Button full onPress={modify}>
            <Text>Send</Text>
          </Button>
          }
        </Form>
      )}
    </Content>
  );
};

// proptypes here
Modify.propTypes = {
  navigation: PropTypes.object,
};

export default Modify;
