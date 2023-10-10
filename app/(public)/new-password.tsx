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

const NewPassword = () => {
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
              <InputField
                type={'password'}
                placeholder={'New Password'}
                autoCapitalize={'none'}
              />
            </Input>
            <Input variant="outline" size="xl" bgColor={'$white'}>
              <InputField
                type={'password'}
                placeholder={'New Password Again'}
                autoCapitalize={'none'}
              />
            </Input>
            <Button
              size="xl"
              variant="solid"
              action="primary"
              onPress={() => router.push('/sign-in')}>
              <ButtonText>Change</ButtonText>
            </Button>
          </BlurredContainer>
        </Box>
      </Box>
    </KeyboardAvoidingWrapper>
  );
};

export default NewPassword;
