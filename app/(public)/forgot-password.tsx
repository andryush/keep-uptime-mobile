import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  Image,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';

import BlurredContainer from '../../components/BlurredContainer';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const ForgotPassword = () => {
  return (
    <KeyboardAvoidingWrapper>
      <Box width={'100%'} height={'100%'} bgColor={'$black'}>
        <Image
          size={'full'}
          position={'absolute'}
          source={require('../../assets/images/forgot-bg.jpg')}
          alt={'forgot-background'}
        />
        <Box width={'100%'} marginTop={'70%'}></Box>
        <BlurredContainer header={'Reset Password'}>
          <Input variant="outline" size="xl" bgColor={'$white'}>
            <InputField
              type={'text'}
              placeholder={'Email'}
              autoCapitalize={'none'}
            />
          </Input>
          <Button
            size="xl"
            variant="solid"
            action="primary"
            onPress={() => router.push('/verification')}>
            <ButtonText>Reset</ButtonText>
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
    </KeyboardAvoidingWrapper>
  );
};

export default ForgotPassword;
