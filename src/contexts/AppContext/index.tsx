import { DEFAULT_LOCALE } from '@constants';
import React, { createContext, useContext, useState } from 'react';

import { IProps, IState } from './types';

const AppContext = createContext<IState>({
    isLoggedIn: false,
    locale: DEFAULT_LOCALE,
    setIsLoggedIn: () => null,
    setLocale: () => null,
});

export const AppContextProvider = (props: IProps) => {
    const { children } = props;

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [locale, setLocale] = useState(DEFAULT_LOCALE);

    const value = {
        isLoggedIn,
        locale,
        setIsLoggedIn,
        setLocale,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
