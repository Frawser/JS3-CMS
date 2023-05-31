import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import ProductDetails from "./Pages/ProductDetails";
import RootBoundrary from "./boundarys/RootBoundrary";

const App = () => {
  const [user, setUser] = useState(null);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout user={user} setUser={setUser}/>,
      errorElement: <RootBoundrary />,
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
          path: "products",
          element: <Products />,
        },
        {
          path: "products/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
