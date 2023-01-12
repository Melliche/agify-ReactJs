import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../routes/Login';
import Name from '../routes/Name';

export const AppContext = createContext(null)

export function AppProvider() {
  const [user, setUser] = useState({loggedIn: false})

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: user.loggedIn ? (<Name />) : (<Login />)
      
    },
  ])

  return (
    <AppContext.Provider value={{user, setUser}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}