import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import CityMeteoDetails from '../routes/cityMeteoDetails';
import CityComparison from '../routes/cityComparison';
// import Login from '../routes/Login';

export const AppContext = createContext(null)

export function AppProvider() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:  <App />
      
    },
    {
      path: '/details/:insee',
      element: <CityMeteoDetails />
    },
    {
      path: '/comparison',
      element: <CityComparison />
    }
  ])

  return (
    <AppContext.Provider value=''>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}