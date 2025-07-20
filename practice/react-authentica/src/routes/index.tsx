import Login from '../pages/Login';
import MyTasks from '../pages/MyTask';
import Roles from '../pages/Roles';
import Tasks from '../pages/Tasks';
import Users from '../pages/Users';
import UpdateUserPage from '../pages/UpdateUser';


const routes = [
  {
    path: '/login',
    showOnMenu: false,
    isPublic: true,
    name: 'Login',
    index: true,
    element: <Login />,
    roles: [],
  },
  {
    path: '/home',
    showOnMenu: true,
    name: 'Home',
    index: true,
    element: <Tasks />,
    roles: ['managers', 'leaders', 'users'],
  },
  {
    path: '/tasks',
    showOnMenu: true,
    name: 'Tasks',
    index: true,
    element: <Tasks />,
    roles: ['managers', 'leaders'],
  },

  {
    path: '/my-tasks',
    showOnMenu: true,
    name: 'My Tasks',
    index: true,
    element: <MyTasks />,
    roles: ['users'],
  },

  {
    path: '/security',
    showOnMenu: true,
    name: 'Security',
    index: true,
    element: <div>Security</div>,
    roles: ['sdsds'],
  },
  {
    path: '/users',
    showOnMenu: true,
    name: 'Users',
    index: true,
    element: <Users/>,
    roles: ['Administrators'],
  },
  {
    path: '/roles',
    showOnMenu: true,
    name: 'Roles',
    index: true,
    element: <Roles/>,
    roles: ['Administrators'],
  },
  {
    path: '/users/:id/edit',
    showOnMenu: false,
    name: 'Update User',
    index: true,
    element: <UpdateUserPage/>,
    roles: ['Administrators'],
  },
];
export default routes;