import {
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  HStack,
  Image,
} from '@gluestack-ui/themed';
import { router } from 'expo-router';

import Logo from '../../assets/svgs/logo.svg';
import BlurredContainer from '../../components/BlurredContainer';
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';

const SignIn = () => {
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
            <InputField
              type={'text'}
              placeholder={'Email'}
              autoCapitalize={'none'}
            />
          </Input>
          <Input variant="outline" size="xl" bgColor={'$white'}>
            <InputField type={'password'} placeholder={'Password'} />
          </Input>
          <Button size="xl" variant="solid" action="primary" onPress={() => {}}>
            <ButtonText>Sign In</ButtonText>
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
