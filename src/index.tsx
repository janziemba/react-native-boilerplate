import { AppContextProvider } from '@contexts';
import { NavigationContainer } from '@react-navigation/native';
import { IntlProvider, Navigator } from '@wrappers';
import { NativeBaseProvider } from 'native-base';
import React from 'react';

const App = () => {
    return (
        <NativeBaseProvider>
            <AppContextProvider>
                <IntlProvider>
                    <NavigationContainer>
                        <Navigator />
                    </NavigationContainer>
                </IntlProvider>
            </AppContextProvider>
        </NativeBaseProvider>
    );
};

export default App;
