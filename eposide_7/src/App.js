import Home from './Components/Pages/Home';
import './App.css';
import About from './Components/Pages/About';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element : <Home />
  },
  {
    path: '/about',
    element: <About />
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
