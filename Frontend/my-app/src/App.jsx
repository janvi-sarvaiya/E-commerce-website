import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import { ToastContainer } from "react-toastify";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account/Account";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import Checkout from "./pages/Checkout";
import OrderCompleted from "./pages/OrderCompleted";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Account/Profile";
import Orders from "./pages/Account/Orders";
import ChangePassword from "./pages/Account/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "category/:category",
        element: <CategoryPage />,
      },
      {
        path: "cart",
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        ),
      },
      {
        path: "wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "ordercompleted",
        element: (
          <ProtectedRoute>
            <OrderCompleted />
          </ProtectedRoute>
        ),
      },
      {
        path: "my-account",
        element: (
          <ProtectedRoute>
            <Account />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
