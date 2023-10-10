import { Stack } from 'expo-router';

const PublicLayout = () => {
  return (
    <Stack>
      <Stack.Screen name={'sign-in'} options={{ headerShown: false }} />
      <Stack.Screen
        name={'verification'}
        options={{
          headerTitle: '',
          gestureEnabled: true,
          headerBackButtonMenuEnabled: true,
          headerTransparent: true,
          headerTintColor: '#696cff',
        }}
      />
      <Stack.Screen
        name={'forgot-password'}
        options={{
          headerTitle: '',
          gestureEnabled: true,
          headerBackButtonMenuEnabled: true,
          headerTransparent: true,
          headerTintColor: '#696cff',
        }}
      />
    </Stack>
  );
};

export default PublicLayout;
