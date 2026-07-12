import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Sorting from "../pages/Sorting";
import Searching from "../pages/Searching";
import Graph from "../pages/Graph";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/searching" element={<Searching />} />
          <Route path="/graph" element={<Graph />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}