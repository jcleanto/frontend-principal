import React from 'react';
import { useCookies } from 'react-cookie';
import { useQuery } from '@tanstack/react-query';
import { getMeFn } from '../api/authApi';
import { useStateContext } from '../context';
import FullScreenLoader from '../../components/FullScreenLoader';

type AuthMiddlewareProps = {
  children: React.ReactElement;
};

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const [cookies] = useCookies(['logged_in']);
  const stateContext = useStateContext();

  const query = useQuery({
    queryKey: ['authUser', {
      enabled: !!cookies.logged_in,
      select: (data: { user: any; }) => data.user,
      onSuccess: (data: any) => {
        stateContext.dispatch({ type: 'SET_USER', payload: data });
      },
    }],
    queryFn: getMeFn,
  });

  if (query.isLoading && cookies.logged_in) {
    return <FullScreenLoader />;
  }

  return children;
};

export default AuthMiddleware;
