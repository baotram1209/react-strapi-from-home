import { BrowserRouter, Routes, Route } from "react-router-dom";

// page & layout imports
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/details/:id" element={<ReviewDetails />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
