import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Pages/Error'
import Watch from './Pages/Watch'
import Home from './Pages/Home'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/Store';

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
    path: "/",
    element: <Applayout />,
    errorElement : <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: "watch",
        element: <Watch />
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
