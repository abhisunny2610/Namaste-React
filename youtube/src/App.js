import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Shorts from './Pages/Shorts';
import Subscription from './Pages/Subscription';
import You from './Pages/You';
import Downloads from './Pages/Downloads';
// import { Provider, useDispatch } from 'react-redux';
// import store from './Redux/store';
import Header from './Components/Header';
// import { useEffect } from 'react';
// import { fetchVideos } from './Redux/VideoSlice';

const Applayout = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchVideos())
  // }, [dispatch])

  return (
    <>
      <Sidebar />
      <div className='sections'>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'shorts',
        element: <Shorts />
      },
      {
        path: 'subscription',
        element: <Subscription />
      },
      {
        path: 'you',
        element: <You />
      },
      {
        path: 'downloads',
        element: <Downloads />
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
