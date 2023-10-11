import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route path="aboutpage" element={<AboutPage />} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
