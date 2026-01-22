import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Book from "./Book";
import Contact from "./Contact";
import Services from "./Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
