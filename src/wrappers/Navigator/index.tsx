import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Detail, Home, Login } from '@screens';
import { RootStackParamList } from '@types';
import React from 'react';
import { useIntl } from 'react-intl';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigator = () => {
    const { formatMessage } = useIntl();

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                component={Detail}
                name="Detail"
                options={{ title: formatMessage({ id: 'TITLE_DETAIL' }) }}
            />
            <Stack.Screen
                component={Home}
                name="Home"
                options={{ title: formatMessage({ id: 'TITLE_HOME' }) }}
            />
            <Stack.Screen
                component={Login}
                name="Login"
                options={{ title: formatMessage({ id: 'LOGIN_HOME' }) }}
            />
        </Stack.Navigator>
    );
};

export default Navigator;
