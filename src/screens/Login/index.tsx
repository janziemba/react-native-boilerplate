import { useAppContext } from '@contexts';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { Button, FormControl, Input, ScrollView, WarningOutlineIcon } from 'native-base';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { IFormValues } from './types';

const Login = () => {
    const { goBack } = useNavigation();
    const { setIsLoggedIn } = useAppContext();

    const validationSchema = Yup.object().shape({
        email: Yup.string().trim().email().required('Povinný údaj'),
        password: Yup.string().required('Povinný údaj'),
    });

    const {
        control,
        formState: { errors, isSubmitting },
        handleSubmit,
    } = useForm<IFormValues>({
        defaultValues: {
            email: __DEV__ ? 'test@test.cz' : '',
            password: __DEV__ ? '123456' : '',
        },
        resolver: yupResolver(validationSchema),
    });

    const handleLogin = () => {
        setIsLoggedIn(true);
        goBack();
    };

    return (
        <ScrollView _contentContainerStyle={{ p: '3' }}>
            <Controller
                control={control}
                name="email"
                render={({ field: { onBlur, onChange, value } }) => (
                    <FormControl
                        isInvalid={errors.email ? Object.keys(errors.email).length > 0 : false}
                        mb={4}
                    >
                        <FormControl.Label>E-mail</FormControl.Label>
                        <Input
                            keyboardType="email-address"
                            onBlur={onBlur}
                            onChangeText={onChange}
                            size="lg"
                            textContentType="emailAddress"
                            value={value}
                        />
                        {errors.email ? (
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                {errors.email.message}
                            </FormControl.ErrorMessage>
                        ) : null}
                    </FormControl>
                )}
            />
            <Controller
                control={control}
                name="password"
                render={({ field: { onBlur, onChange, value } }) => (
                    <FormControl
                        isInvalid={
                            errors.password ? Object.keys(errors.password).length > 0 : false
                        }
                        mb={4}
                    >
                        <FormControl.Label>Heslo</FormControl.Label>
                        <Input
                            onBlur={onBlur}
                            onChangeText={onChange}
                            size="lg"
                            textContentType="password"
                            type="password"
                            value={value}
                        />
                        {errors.password ? (
                            <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                                {errors.password.message}
                            </FormControl.ErrorMessage>
                        ) : null}
                    </FormControl>
                )}
            />
            <Button isLoading={isSubmitting} mt={5} onPress={handleSubmit(handleLogin)}>
                Log in
            </Button>
        </ScrollView>
    );
};

export default Login;
