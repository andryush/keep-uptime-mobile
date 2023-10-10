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

const Verification = () => {
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
              <InputField
                type={'text'}
                placeholder={'Verification Code'}
                autoCapitalize={'none'}
              />
            </Input>
            <Button
              size="xl"
              variant="solid"
              action="primary"
              onPress={() => router.push('/new-password')}>
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
