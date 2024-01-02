import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Shorts from './Pages/Shorts';
import Subscription from './Pages/Subscription';
import You from './Pages/You';
import Downloads from './Pages/Downloads';
import { Provider } from 'react-redux';
import store from './Redux/store';

const Applayout = () => {
  return (
    <Provider store={store}>
      <Sidebar />
      <Outlet />
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <Applayout />,
    errorElement: <Error />,
    children:[
      {
        path : '/',
        element : <Home />
      },
      {
        path: 'shorts',
        element: <Shorts />
      },
      {
        path: 'subscription',
        element : <Subscription />
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
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
