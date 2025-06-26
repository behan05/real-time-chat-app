import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import Initialising from "./Initialising/Initialising";
import { routes } from "./routes/AppRoutes"; // your actual routing file

function App() {
  const [initialising, setinitialising] = useState(true);

  useEffect(() => {
    setTimeout(() => setinitialising(false), 2500);
  }, []);

  return initialising ? <Initialising /> : <RouterProvider router={routes} />;
}

export default App;
