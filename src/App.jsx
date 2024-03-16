import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import LoginRoot from "./pages/Login/LoginRoot";
import Login1 from "./pages/Login/Login1";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/products/:productID",
    element: <ProductDetails />,
  },
  {
    path: "/login",
    element: <LoginRoot />,
    children: [
      {
        path: "/login",
        element: <Login1 />,
        index: true,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
