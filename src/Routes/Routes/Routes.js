import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import MainCourses from "../../components/MainCourses";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <MainCourses></MainCourses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
    ],
  },
]);
