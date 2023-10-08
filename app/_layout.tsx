import { GluestackUIProvider } from '@gluestack-ui/themed';
import { router, Slot, useSegments } from 'expo-router';
import { useEffect } from 'react';

import { config } from '../gluestack-ui.config';

// TODO remove after connecting backend;
const IS_SIGNED_IN = false;

const InitialLayout = () => {
  const segments = useSegments();

  useEffect(() => {
    const inProtectedRoutesGroup = segments[0] === '(protected)';

    if (IS_SIGNED_IN && !inProtectedRoutesGroup) {
      router.replace('/home');
    } else if (!IS_SIGNED_IN) {
      router.replace('/login');
    }
  }, [IS_SIGNED_IN]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <GluestackUIProvider config={config}>
      <InitialLayout />
    </GluestackUIProvider>
  );
};

export default RootLayout;
