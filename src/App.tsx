import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";

function App() {
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: "/",
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
