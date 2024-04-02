import MainLayout from '../layouts/MainLayout';
import React from 'react';
import {Button} from 'react-native';

const AboutScreen = ({navigation}) => {
    return (
        <MainLayout>
            <Button
        title="Go to content"
        onPress={() => navigation.navigate('Content')}
      />
        </MainLayout>
    );
}
export default AboutScreen;