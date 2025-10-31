import { createBrowserRouter, RouterProvider } from "react-router-dom";

//ici il s'agit d'une importation nommée au Niveau menu et Order
import Menu, { Loader as menuLoader } from "./features/menu/Menu";
import Order, { Loader as orderLoader } from "./features/order/Order";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";

import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

//on peut placer le error element dans le layout pour catcher les erreurs des enfants
//Ou n'importe où dans l'arborescence des routes
//On peut le definir aussi sur chaque route individuellement

const router = createBrowserRouter([
  {
    element: <AppLayout />, //Outlet with child , #"my bug is elemment  "
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
      { path: "/cart", element: <Cart /> },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
