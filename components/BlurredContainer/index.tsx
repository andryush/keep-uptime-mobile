import { Box, Heading } from '@gluestack-ui/themed';
import { BlurView } from 'expo-blur';
import { ReactNode } from 'react';
import { DimensionValue } from 'react-native';

type Props = {
  header?: string;
  blurIntensity?: number;
  marginTop?: DimensionValue;
  children: ReactNode;
};

const BlurredContainer = ({
  header,
  blurIntensity = 30,
  marginTop = '-30%',
  children,
}: Props) => {
  return (
    <Box
      paddingLeft={20}
      paddingRight={20}
      flexDirection={'column-reverse'}
      justifyContent={'center'}
      height={'100%'}
      marginTop={marginTop}>
      <BlurView
        intensity={blurIntensity}
        tint={'dark'}
        style={{ overflow: 'hidden', borderRadius: 14 }}>
        <Box width={'100%'} rounded={'$xl'} padding={16}>
          {header && (
            <Heading size={'xl'} color={'$white'} marginBottom={16}>
              {header}
            </Heading>
          )}
          <Box gap={14}>{children}</Box>
        </Box>
      </BlurView>
    </Box>
  );
};

export default BlurredContainer;
