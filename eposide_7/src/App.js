import Home from './Components/Pages/Home';
import './App.css';
import About from './Components/Pages/About';
import { createBrowserRouter , RouterProvider, Outlet} from 'react-router-dom';
import ErrorPage from './Components/Pages/ErrorPage';
import Header from './Components/Utilities/Header';
import Footer from './Components/Utilities/Footer';

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
    path: '/',
    element : <Applayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element : <About />
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
