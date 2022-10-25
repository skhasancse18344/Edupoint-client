import { RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import { routes } from "./Routes/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
