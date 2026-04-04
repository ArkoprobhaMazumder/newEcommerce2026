import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

const NavbarComponent = React.lazy(() => import('./Components/navbar/Navbar'));
const HomeComponent = React.lazy(() => import('./pages/home/Home'));
const AboutComponent = React.lazy(() => import('./pages/about/About'));
const ContactComponent = React.lazy(() => import('./pages/contact/Contact'));
const OrderComponent = React.lazy(() => import('./pages/order/Order'));
const CollectionComponent = React.lazy(() => import('./pages/collection/Collection'));


const App = () => {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <NavbarComponent />,
      children: [
        {
          index: true,
          element: <HomeComponent />
        },
        {
          path: 'about',
          element: <AboutComponent />
        },
        {
          path: 'contact',
          element: <ContactComponent />
        },
        {
          path: 'order',
          element: <OrderComponent />,
        },
        {
          path: 'collection',
          element: <CollectionComponent />
        }
      ]
    }
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={routes} />
    </Provider>
  )
}

export default App;
