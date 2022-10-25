import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import MainCourses from "../../components/MainCourses";
import CourseDetail from "../../components/CourseDetail";

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
      {
        path: "/details/:id",
        element: <CourseDetail></CourseDetail>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
    ],
  },
]);
