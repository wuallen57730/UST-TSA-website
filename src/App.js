import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import Layout from "./components/Layout";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Freshmen from "./components/Freshmen";
import UsefulInformation from "./components/UsefulInformation";
import UsefulLink from "./components/UsefulLink";
import Page404 from "./components/Page404";

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="usefulinformation/freshmen" element={<Freshmen />} />
        <Route path="usefulinformation" element={<UsefulInformation />} />
        <Route path="usefulinformation/usefullink" element={<UsefulLink />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <RoutesWithAnimation />
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
