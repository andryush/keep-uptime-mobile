import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '000',
        },
        headerTintColor: 'green',
      }}>
      <Stack.Screen
        name={'home'}
        options={{
          headerTitle: 'Home',
        }}
      />
    </Stack>
  );
};

export default AuthLayout;
