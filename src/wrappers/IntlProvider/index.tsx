import { useAppContext } from '@contexts';
import React from 'react';
import { IntlProvider as RNIntlProvider } from 'react-intl';

import translations from '../../translations';
import { IProps } from './types';

const IntlProvider = (props: IProps) => {
    const { children } = props;
    const { locale } = useAppContext();
    const messages = translations[locale];

    return (
        <RNIntlProvider locale={locale} messages={messages}>
            {children}
        </RNIntlProvider>
    );
};

export default IntlProvider;
