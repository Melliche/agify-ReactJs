import { createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import CityMeteoDetails from '../routes/cityMeteoDetails';
import CityComparison from '../routes/cityComparison';

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
      path: '/comparison/:insee1/:insee2',
      element: <CityComparison />
    }
  ])

  return (
    <AppContext.Provider value=''>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}