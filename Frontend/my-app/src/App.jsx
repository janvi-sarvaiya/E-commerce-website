import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/layout/ProtectedRoute";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import Checkout from "./pages/Checkout";
import OrderCompleted from "./pages/OrderCompleted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/shop/:id",
    element: <ProductDetail />,
  },
  {
    path: "/category/:category",
    element: <CategoryPage />,
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    ),
  },
  {
    path: "/wishlist",
    element: (
      <ProtectedRoute>
        <Wishlist />
      </ProtectedRoute>
    ),
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  }, {
    path: "/ordercompleted",
    element: (
      <ProtectedRoute>
        <OrderCompleted />
      </ProtectedRoute>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
