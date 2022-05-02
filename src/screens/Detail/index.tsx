import { Icon, ScrollView, Text } from 'native-base';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Props } from './types';

const Detail = (props: Props) => {
    const { route } = props;
    const { name } = route.params;

    return (
        <ScrollView _contentContainerStyle={{ p: '3' }}>
            <Text>{name}</Text>
            <Icon as={FontAwesome} color="danger.500" name="rocket" size={50} />
        </ScrollView>
    );
};

export default Detail;
