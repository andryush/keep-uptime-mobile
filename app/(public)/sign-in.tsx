import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  HStack,
  Image,
  Text,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
  InputSlot,
  Spinner,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import Logo from '../../assets/svgs/logo.svg';
import BlurredContainer from '../../components/BlurredContainer';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      router.push('/home');
      setLoading(false);
    }, 3000);
  };

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <KeyboardAvoidingWrapper>
      <Box width={'100%'} height={'100%'} bgColor={'$black'}>
        <Image
          size={'full'}
          position={'absolute'}
          source={require('../../assets/images/login-bg.jpg')}
          alt={'login-background'}
        />
        <Box
          width={'100%'}
          height={'$0'}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={'row'}
          marginTop={'70%'}>
          <Logo width={100} height={100} />
        </Box>
        <BlurredContainer header={'Sign In'}>
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
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  type={'text'}
                  placeholder={'Email'}
                  autoCapitalize={'none'}
                />
              )}
            />
          </Input>
          {errors?.email && (
            <Text color={'red'}>{errors?.email?.message?.toString()}</Text>
          )}
          <Input variant="outline" size="xl" bgColor={'$white'}>
            <Controller
              defaultValue={''}
              name={'password'}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'This field is required',
                },
                minLength: {
                  value: 8,
                  message: 'Password must contain at least 8 characters',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  type={showPassword ? 'text' : 'password'}
                  placeholder={'Password'}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <InputSlot pr="$3" onPress={handleShowPassword}>
              <InputIcon
                color={'$primary500'}
                as={showPassword ? EyeIcon : EyeOffIcon}
              />
            </InputSlot>
          </Input>
          {errors?.password && (
            <Text color={'red'}>{errors?.password?.message?.toString()}</Text>
          )}
          <Button
            size="xl"
            variant="solid"
            action="primary"
            isDisabled={loading}
            onPress={handleSubmit(handleLogin)}>
            <ButtonText>Sign In</ButtonText>
            <Spinner animating={loading} ml={'$2'} color={'#FFF'} />
          </Button>
          <Box>
            <HStack>
              <Button
                size="md"
                variant="link"
                action="primary"
                onPress={() => router.push('/forgot-password')}>
                <ButtonText color={'#fff'}>Forgot your password?</ButtonText>
              </Button>
            </HStack>
          </Box>
        </BlurredContainer>
      </Box>
    </KeyboardAvoidingWrapper>
  );
};

export default SignIn;
