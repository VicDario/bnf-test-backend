import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/layout";

import Home from "./pages/home/Home";
import Help from "./pages/help/Help";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
