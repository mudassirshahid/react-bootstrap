import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from '../src/components/Home'
import About from '../src/components/About'
import Services from '../src/components/Services'
import WebDevelopment from './components/WebDevelopment';
import Seo from './components/Seo';
import WebDesign from './components/WebDesign';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services />} />
      <Route path="webdevelopment" element={<WebDevelopment />} />
      <Route path="seo" element={<Seo />} />;
      <Route path="webdesign" element={<WebDesign />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="blog" element={<Blog />} />
      <Route path="team" element={<Team />} />
      <Route path="Contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
