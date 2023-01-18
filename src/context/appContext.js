import { createContext, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import CityMeteoDetails from '../routes/cityMeteoDetails';
// import Login from '../routes/Login';

export const AppContext = createContext(null)

export function AppProvider() {
  // const [insee, setInsee] = useState({insee: null})

  const router = createBrowserRouter([
    {
      path: '/',
      element:  <App />
      
    },
    {
      path: '/details/:insee',
      element: <CityMeteoDetails />
    },
  ])

  return (
    <AppContext.Provider value=''>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}