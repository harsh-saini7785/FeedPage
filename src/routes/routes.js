import { lazy } from 'react';
import endPoints from './endPoints';

const routes = [
    {
        path: endPoints.home,
        component: lazy(() => import('../container/Home/Home')),
        exact: true,
    },
    {
        path: endPoints.userProfile,
        component: lazy(() => import('../container/UserProfile/UserProfile')),
        exact: true,
    },

];

export default routes;