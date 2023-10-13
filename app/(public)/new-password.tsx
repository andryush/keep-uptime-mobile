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
import { useForm, Controller } from 'react-hook-form';

import BlurredContainer from '../../components/BlurredContainer';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const NewPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleChangePassword = () => router.push('/sign-in');

  return (
    <KeyboardAvoidingWrapper>
      <Box width={'100%'} height={'100%'} bgColor={'$black'}>
        <Image
          size={'full'}
          position={'absolute'}
          source={require('../../assets/images/new-password-bg.jpg')}
          alt={'forgot-background'}
        />
        <Box>
          <BlurredContainer header={'Change Password'} marginTop={0}>
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
                    type={'password'}
                    placeholder={'New password'}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </Input>
            {errors?.password && (
              <Text color={'red'}>{errors?.password?.message?.toString()}</Text>
            )}
            <Input variant="outline" size="xl" bgColor={'$white'}>
              <Controller
                defaultValue={''}
                name={'confirm'}
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
                  validate: value =>
                    value === watch('password') || 'Passwords do not match',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                  <InputField
                    type={'password'}
                    placeholder={'Confirm new password'}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
            </Input>
            {errors?.confirm && (
              <Text color={'red'}>{errors?.confirm?.message?.toString()}</Text>
            )}
            <Button
              size="xl"
              variant="solid"
              action="primary"
              onPress={handleSubmit(handleChangePassword)}>
              <ButtonText>Change</ButtonText>
            </Button>
          </BlurredContainer>
        </Box>
      </Box>
    </KeyboardAvoidingWrapper>
  );
};

export default NewPassword;
