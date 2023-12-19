import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './Components/Component/Header';
import Footer from './Components/Component/Footer';
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Cart from './Components/Pages/Cart'
import Products from './Components/Pages/Products'
import ProductDetails from './Components/Pages/ProductDetails';
import { ProductProvider } from './Context/ProductContext';
import { FilterProvider } from './Context/FilterContext';
import { CartProvider } from './Context/CartContext';


const Applayout = () => {
  return (
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
          <Header />
          <Outlet />
          <Footer />
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "/product/:proId",
        element: <ProductDetails />
      },
      {
        path: "cart",
        element: <Cart />
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
