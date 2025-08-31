import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import * as z from 'zod';
import { Button, Box, Container, Typography } from '@mui/material';
import FormInput from '../../components/FormInput';
import { getMeFn, loginUserFn } from '../api/authApi';
import { useStateContext } from '../../auth/context';

const loginSchema = z.object({
  email: z.string()
    .min(1, 'Email é obrigatório')
    .email('Email é inválido'),
  senha: z.string()
    .min(1, 'Senha é obrigatória')
    .min(8, 'A Senha tem que ter pelo menos 8 caracteres')
    .max(32, 'A Senha tem que ter no máximo 32 caracteres'),
});

export type LoginInput = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = ((location.state as any)?.from.pathname as string) || '/users';

  const methods = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const stateContext = useStateContext();

  // API Get Current Logged-in user
  const query = useQuery({
    queryKey: ['authUser', {
      enabled: false,
      select: (data: { data: { user: any; }; }) => data.data.user,
      retry: 1,
      onSuccess: (data: any) => {
        stateContext.dispatch({ type: 'SET_USER', payload: data });
      },
    }],
    queryFn: getMeFn,
  });

  //  API Login Mutation
  const { mutate: loginUser, isPending } = useMutation(
    { mutationFn: (userData: LoginInput) => loginUserFn(userData),
      onSuccess: (data: any) => {
        stateContext.dispatch({ type: 'SET_USER', payload: data });
        localStorage.setItem('authUser', JSON.stringify(data));
        localStorage.setItem('token', data.access_token);
        query.refetch();
        toast.success('Login feito com sucesso!');
        navigate(from);
      },
      onError: (error: any) => {
        if (Array.isArray((error as any).response.data.error)) {
          (error as any).response.data.error.forEach((el: any) =>
            toast.error(el.message, {
              position: 'top-right',
            })
          );
        } else {
          toast.error((error as any).response.data.message, {
            position: 'top-right',
          });
        }
      },
    }
  );

  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
    loginUser(values);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='body1'
          component='h2'
          sx={{ color: '#aaaaaa', mb: 2 }}
        >
          Login
        </Typography>

        <FormProvider {...methods}>
          <Box
            component='form'
            onSubmit={handleSubmit(onSubmitHandler)}
            noValidate
            autoComplete='off'
            maxWidth='27rem'
            width='100%'
            sx={{
              backgroundColor: 'rgb(255, 255, 255)',
              p: { xs: '1rem', sm: '2rem' },
              borderRadius: 2,
            }}
          >
            <FormInput name='email' label='Email' type='email' />
            <FormInput name='senha' label='Senha' type='password' />

            <Button
              variant='contained'
              sx={{ mt: 1 }}
              fullWidth
              disableElevation
              type='submit'
              loading={isPending}
            >
              Login
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Container>
  );
};

export default LoginPage;
