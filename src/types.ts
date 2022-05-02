import messages from './translations/en.json';

export type RootStackParamList = {
    Detail: { name: string };
    Home: undefined;
    Login: undefined;
};

export type Locale = 'cs' | 'en';

/* eslint-disable @typescript-eslint/no-namespace, @typescript-eslint/no-empty-interface */
declare global {
    namespace FormatjsIntl {
        interface IntlConfig {
            locale: Locale;
        }

        interface Message {
            ids: keyof typeof messages;
        }
    }

    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}
