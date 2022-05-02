module.exports = {
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '@constants': './src/constants.ts',
                    '@contexts': './src/contexts',
                    '@screens': './src/screens',
                    '@types': './src/types.ts',
                    '@wrappers': './src/wrappers',
                },
                root: ['./'],
            },
        ],
    ],
    presets: ['module:metro-react-native-babel-preset'],
};
