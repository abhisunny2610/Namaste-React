import Home from './Components/Pages/Home';
import './App.css';
import React from 'react';
import About from './Components/Pages/About';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import ErrorPage from './Components/Pages/ErrorPage';
import Header from './Components/Utilities/Header';
import Footer from './Components/Utilities/Footer';
import RestaurantMenu from './Components/Pages/RestaurantMenu';
import Profile from './Components/Pages/Profile';
import Shimmer from './Components/Utilities/Shimmer';
import Cart from './Components/Pages/Cart';
import { Provider } from 'react-redux';
import store from './Components/store';

/* 

  --> chunking
  --> code spliting
  --> dynamic bundling
  --> lazy loading
  --> on demad loading
  --> dynamic import

  


Ques. What is lazy loading in react ?

Ans. Lazy loading in React is a technique used to optimize the loading of web applications by deferring the loading of certain components until they are actually needed. This can help reduce the initial bundle size, improve the initial loading time of the application, and enhance the overall user experience.

In a typical React application, all components are bundled together and loaded when the application starts. However, not all components may be necessary for the initial rendering of the page. Lazy loading allows you to load certain components only when they are required, such as when a user navigates to a specific route or performs a certain action

*/

const InstaMart = React.lazy(() => import("./Components/Pages/InstaMart"))


const Applayout = () => {
  return (
    <Provider store={store}>

      <Header />
      <Outlet />
      <Footer />

    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "instamart",
        element: <React.Suspense fallback={<Shimmer />}><InstaMart /></React.Suspense>
      },
      {
        path: "cart",
        element: <Cart />
      }
    ]
  },
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
