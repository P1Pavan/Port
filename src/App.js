import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SplineComp from "./Components/Spline";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Project from "./Screens/Project";
import Spline from "@splinetool/react-spline";


export default function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


// https://prod.spline.design/uB72n1Wd-PJhzPjk/scene.splinecode

