import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  Image,
  Text,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';

import BlurredContainer from '../../components/BlurredContainer';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const Verification = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleVerify = () => router.push('/new-password');

  console.log(errors);

  return (
    <KeyboardAvoidingWrapper>
      <Box width={'100%'} height={'100%'} bgColor={'$black'}>
        <Image
          size={'full'}
          position={'absolute'}
          source={require('../../assets/images/verification-bg.jpg')}
          alt={'verification-background'}
        />
        <Box>
          <BlurredContainer header={'Verification'} marginTop={0}>
            <Input variant="outline" size="xl" bgColor={'$white'}>
              <Controller
                name={'verification'}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'This field is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Verification code should be 6 digits',
                  },
                  maxLength: {
                    value: 6,
                    message: 'Verification code should be 6 digits',
                  },
                }}
                defaultValue={''}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputField
                    type={'text'}
                    placeholder={'Verification Code'}
                    autoCapitalize={'none'}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
              />
            </Input>
            {errors?.verification && (
              <Text color={'red'}>
                {errors?.verification?.message?.toString()}
              </Text>
            )}
            <Button
              size="xl"
              variant="solid"
              action="primary"
              onPress={handleSubmit(handleVerify)}>
              <ButtonText>Verify</ButtonText>
            </Button>
            <Box>
              <Button
                size="md"
                variant="link"
                action="primary"
                onPress={() => router.push('/forgot-password')}>
                <ButtonText color={'#fff'}>Back to Forgot Password</ButtonText>
              </Button>
            </Box>
          </BlurredContainer>
        </Box>
      </Box>
    </KeyboardAvoidingWrapper>
  );
};

export default Verification;
