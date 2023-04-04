import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DraggableMaze from "./DraggableMaze";
import DND from "./DND";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DraggableMaze />,
    },
    {
      path: "/dnd",
      element: <DND />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
