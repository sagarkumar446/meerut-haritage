import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import CityGuide from "./pages/CityGuide";
import Community from "./pages/Community";
import Contact from "./pages/Contact";
import HistoricalPlaces from "./pages/HistoricalPlaces";
import Home from "./pages/Home";
import MeerutHeritage from "./pages/MeerutHeritage";


const App = () => {
  const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children: [
          {
            path: "/",
            element: <MeerutHeritage />

          },
  {
    path: "historical-places",
    element: <HistoricalPlaces />
  },
  {
    path: "city-guide",
    element: <CityGuide />
  },
  {
    path: "community",
    element: <Community />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "contact",
    element: <Contact />
  }
]

    }
]);
return(
<RouterProvider router={router}>
</RouterProvider>)
};
export default App;