import MainLayout from '../layouts/MainLayout';
import {Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <MainLayout>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
};
export default HomeScreen;
