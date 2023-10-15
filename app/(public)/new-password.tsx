import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  Image,
  Text,
  InputSlot,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
  Spinner,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import BlurredContainer from '../../components/BlurredContainer';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import { useCustomToast } from '../../hooks/useCustomToast';

const NewPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showSuccessToast } = useCustomToast();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleChangePassword = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/sign-in');
      showSuccessToast('Password changed');
    }, 3000);
  };

  const handleShowPassword = (type: string) => {
    return type === 'password'
      ? setShowPassword(prev => !prev)
      : setShowConfirmPassword(prev => !prev);
  };

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
                    type={showPassword ? 'text' : 'password'}
                    placeholder={'New password'}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              <InputSlot pr="$3" onPress={() => handleShowPassword('password')}>
                <InputIcon
                  color={'$primary500'}
                  as={showPassword ? EyeIcon : EyeOffIcon}
                />
              </InputSlot>
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
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder={'Confirm new password'}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              <InputSlot
                pr="$3"
                onPress={() => handleShowPassword('confirmPassword')}>
                <InputIcon
                  color={'$primary500'}
                  as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                />
              </InputSlot>
            </Input>
            {errors?.confirm && (
              <Text color={'red'}>{errors?.confirm?.message?.toString()}</Text>
            )}
            <Button
              size="xl"
              variant="solid"
              action="primary"
              isDisabled={loading}
              onPress={handleSubmit(handleChangePassword)}>
              <ButtonText>Change</ButtonText>
              <Spinner animating={loading} ml={'$2'} color={'#FFF'} />
            </Button>
          </BlurredContainer>
        </Box>
      </Box>
    </KeyboardAvoidingWrapper>
  );
};

export default NewPassword;
