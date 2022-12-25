import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/Routes";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
