import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import MainCourses from "../../components/MainCourses";
import CourseDetail from "../../components/CourseDetail";
import Blog from "../../components/Blog";
import FAQ from "../../components/FAQ";
import Checkout from "../../components/Checkout";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../components/ErrorPage";

export const routes = createBrowserRouter([
  {
    errorElement: <ErrorPage></ErrorPage>,
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainCourses></MainCourses>,
        loader: () => fetch("https://edupoint-server.vercel.app/courses"),
      },
      {
        path: "/details/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) =>
          fetch(`https://edupoint-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://edupoint-server.vercel.app/checkout/${params.id}`),
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/question",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
