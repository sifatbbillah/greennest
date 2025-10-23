import { createBrowserRouter } from "react-router";
import Rootlayout from "../Rootlayout/Rootlayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../Component/Login";
import Signup from "../Component/Signup";
import SubDetails from "../Component/SubDetails";
import PrivateRut from "../PrivateRoute/PrivateRut";
import Profile from "../Component/Profile";
import Allplants from "../componentes2/Allplants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "/plantDetails/:id",

        element: (
          <PrivateRut>
            {" "}
            <SubDetails></SubDetails>{" "}
          </PrivateRut>
        ),
      },

      {
        path: "/profile",
        element: (
          <PrivateRut>
            {" "}
            <Profile></Profile>
          </PrivateRut>
        ),
      },
      {
        path:"/allplant",
        element:<Allplants></Allplants>
      }
    ],
  },
]);
