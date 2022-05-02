module.exports = {
    extends: [
        require.resolve('@janziemba/eslint-config-base'),
        require.resolve('@janziemba/eslint-config-react-native'),
        require.resolve('@janziemba/eslint-config-typescript'),
    ],
    parser: '@typescript-eslint/parser',
    root: true,
    rules: {
        'react-native/no-inline-styles': 0, // because of NativeBase's _contentContainerStyle
        'react-native/no-raw-text': 0, // because of Link component from react-native-navigation
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
