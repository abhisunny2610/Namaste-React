import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import Home from './Pages/Home';
import Teacher from './Pages/Teacher';
import Student from './Pages/Student';
import Employee from './Pages/Employee';
import Notice from './Pages/Notice';
import store from './Redux/Store';

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Sidebar />
      <section>
        <Outlet />
      </section>
      <Footer />
    </Provider>
  )
}

const appRouter = createBrowserRouter([{
  path: "/",
  element: <AppLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: "Teacher",
      element: <Teacher />
    },
    {
      path: "Student",
      element: <Student />
    },
    {
      path: "Employee",
      element: <Employee />
    },
    {
      path: "Notice",
      element: <Notice />
    }
  ]
}])

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
