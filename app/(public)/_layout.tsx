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
          headerTintColor: '#FFF',
        }}
      />
      <Stack.Screen
        name={'forgot-password'}
        options={{
          headerTitle: 'Forgot Password',
          gestureEnabled: true,
          headerBackButtonMenuEnabled: true,
        }}
      />
    </Stack>
  );
};

export default PublicLayout;
