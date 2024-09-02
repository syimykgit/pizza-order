import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./fearures/menu/Menu";
import Cart from "./fearures/cart/Cart";

import Order, { loader as orderLoader } from "./fearures/order/Order";

import CreateOrder, {
  action as createOrderAction,
} from "./fearures/order/CreateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { action as updatePriorityAction } from "./ui/UpdateOrder";
import OrderHistory from "./fearures/order/OrderHistory";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
        action: updatePriorityAction,
      },
      {
        path: "/orderhistory",
        element: <OrderHistory />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
