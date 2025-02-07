import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./Layout/DefaultLayout";

import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/prodotti" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
