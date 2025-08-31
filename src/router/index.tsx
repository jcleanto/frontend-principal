import { Suspense, lazy, type JSX } from 'react';
import type { RouteObject } from 'react-router-dom';
import FullScreenLoader from '../components/FullScreenLoader';
import LoginPage from '../auth/pages/login.page';
import Layout from '../components/Layout';
// import RequireUser from '../auth/components/requireUser';

const Loadable =
  (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) =>
    (
      <Suspense fallback={<FullScreenLoader />}>
        <Component {...props} />
      </Suspense>
    );

const ListUserPage = Loadable(lazy(() => import('frontend_top_users/ListUserPage')));
const CreateUserPage = Loadable(lazy(() => import('frontend_top_users/CreateUserPage')));
const EditUserPage = Loadable(lazy(() => import('frontend_top_users/EditUserPage')));

const ListFinancePage = Loadable(lazy(() => import('frontend_top_finance/ListFinancePage')));
const CreateFinancePage = Loadable(lazy(() => import('frontend_top_finance/CreateFinancePage')));
const EditFinancePage = Loadable(lazy(() => import('frontend_top_finance/EditFinancePage')));

const authRoutes: RouteObject = {
  path: '*',
  children: [
    {
      path: 'login',
      element: <LoginPage />,
    },
  ],
};

const normalRoutes: RouteObject = {
  path: '*',
  element: <Layout />,
  children: [
    {
      path: 'users',
      // element: <RequireUser allowedRoles={['admin']} />,
      children: [
        {
          path: '',
          element: <ListUserPage />,
        },
      ],
    },
    {
      path: 'user',
      children: [
        {
          path: '',
          element: <CreateUserPage />,
        },
        {
          path: ':id',
          element: <EditUserPage />,
        },
      ],
    },
    {
      path: 'finances',
      children: [
        {
          path: '',
          element: <ListFinancePage />,
        },
      ],
    },
    {
      path: 'finance',
      children: [
        {
          path: '',
          element: <CreateFinancePage />,
        },
        {
          path: ':id',
          element: <EditFinancePage />,
        },
      ],
    },
  ],
};

const routes: RouteObject[] = [authRoutes, normalRoutes];

export default routes;
