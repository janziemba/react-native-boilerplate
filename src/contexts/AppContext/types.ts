import { ReactElement } from 'react';

import { Locale } from '../../types';

export interface IState {
    isLoggedIn: boolean;
    locale: Locale;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
    setLocale: (locale: Locale) => void;
}

export interface IProps {
    children: ReactElement | ReactElement[];
}
