import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import ProtectedRoutes from "../components/protectedRoute";
  import Home  from "../screens/home";
  import Login from "../screens/login";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    
    { 
    path: "/home",
    element: <ProtectedRoutes component={Home}  />,
    },
  ]);
  const Routes = () => {
    return (
        <RouterProvider router={router} />
    );
}
export default Routes;