import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Products from './pages/Products/Products';
import Navbar from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <div className='app '>
      <Toaster />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element:<Layout/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
    ]
  }
])



function App() {
  return (
    <div className="App container-fluid">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
