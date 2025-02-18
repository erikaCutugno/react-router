import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./Layout/DefaultLayout";

import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
import SinglePost from "./Pages/SinglePost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/prodotti" element={<Products />} />
          <Route path="/prodotti/:id" element={<SinglePost />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
