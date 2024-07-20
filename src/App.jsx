// Router
import {Route, Routes} from "react-router-dom";
// Pages
import HomePage from "./pages/HomePage/index.jsx";
import AboutPage from "./pages/AboutPage/index.jsx";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;