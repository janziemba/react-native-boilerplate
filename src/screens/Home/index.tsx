import { useAppContext } from '@contexts';
import { useNavigation } from '@react-navigation/native';
import { Button, Heading, ScrollView } from 'native-base';
import React from 'react';

const Home = () => {
    const { navigate } = useNavigation();
    const { locale, setLocale } = useAppContext();

    return (
        <ScrollView _contentContainerStyle={{ p: '3' }}>
            <Heading>RN Boilerplate</Heading>
            <Button.Group direction="column" mt={5} size="lg" space={3}>
                <Button onPress={() => navigate('Detail', { name: 'Test' })}>Test</Button>
                <Button onPress={() => navigate('Detail', { name: 'Test2' })}>Test2</Button>
                <Button onPress={() => navigate('Login')}>Login</Button>
                <Button onPress={() => setLocale(locale === 'cs' ? 'en' : 'cs')}>
                    {`Switch language to ${locale === 'cs' ? '🇬🇧' : '🇨🇿'}`}
                </Button>
            </Button.Group>
        </ScrollView>
    );
};

export default Home;
