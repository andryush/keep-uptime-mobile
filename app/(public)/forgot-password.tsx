import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  Image,
  Text,
  Spinner,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import BlurredContainer from '../../components/BlurredContainer';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReset = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/verification');
      setLoading(false);
    }, 3000);
  };

  return (
    <KeyboardAvoidingWrapper>
      <Box width={'100%'} height={'100%'} bgColor={'$black'}>
        <Image
          size={'full'}
          position={'absolute'}
          source={require('../../assets/images/forgot-bg.jpg')}
          alt={'forgot-background'}
        />
        <Box>
          <BlurredContainer header={'Reset Password'} marginTop={0}>
            <Input variant="outline" size="xl" bgColor={'$white'}>
              <Controller
                name={'email'}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: 'Please enter correct email',
                  },
                }}
                defaultValue={''}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputField
                    type={'text'}
                    placeholder={'Email'}
                    autoCapitalize={'none'}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </Input>
            {errors?.email && (
              <Text color={'red'}>{errors?.email?.message?.toString()}</Text>
            )}
            <Button
              size="xl"
              variant="solid"
              action="primary"
              isDisabled={loading}
              onPress={handleSubmit(handleReset)}>
              <ButtonText>Reset</ButtonText>
              <Spinner animating={loading} ml={'$2'} color={'#FFF'} />
            </Button>
            <Box>
              <Button
                size="md"
                variant="link"
                action="primary"
                onPress={() => router.push('/sign-in')}>
                <ButtonText color={'#fff'}>Back to Sign In</ButtonText>
              </Button>
            </Box>
          </BlurredContainer>
        </Box>
      </Box>
    </KeyboardAvoidingWrapper>
  );
};

export default ForgotPassword;
