import {
  CheckCircleIcon,
  CloseCircleIcon,
  Icon,
  Toast,
  ToastTitle,
  useToast,
} from '@gluestack-ui/themed';

export const useCustomToast = () => {
  const toast = useToast();

  const showSuccessToast = (message: string = 'Success') => {
    toast.show({
      placement: 'top',
      render: ({ id }) => {
        return (
          <Toast
            nativeID={id}
            variant={'solid'}
            bg={'#28a745'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={6}>
            <Icon size={'lg'} as={CheckCircleIcon} color="$white" />
            <ToastTitle color={'#fff'}>{message}</ToastTitle>
          </Toast>
        );
      },
    });
  };

  const showErrorToast = (message: string = 'Something went wrong') => {
    toast.show({
      placement: 'top',
      render: ({ id }) => {
        return (
          <Toast
            nativeID={id}
            variant={'solid'}
            bg={'#dc3545'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={6}>
            <Icon size={'lg'} as={CloseCircleIcon} color="$white" />
            <ToastTitle color={'#fff'}>{message}</ToastTitle>
          </Toast>
        );
      },
    });
  };

  return {
    showSuccessToast,
    showErrorToast,
  };
};
