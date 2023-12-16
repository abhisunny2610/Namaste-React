import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Pages/Error'
import Watch from './Pages/Watch'
import Home from './Pages/Home'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

const Applayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
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
        path: "watch/:vId",
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
