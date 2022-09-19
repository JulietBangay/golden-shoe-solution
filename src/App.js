import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";
import Footer from "./components/footer/Footer";

import Privacy from "./pages/legals/privacy/Privacy";
import Terms from "./pages/legals/terms/Terms";
import Contact from "./pages/contact/Contact";
import FAQs from "./pages/faqs/FAQs";
import About from "./pages/about/About";
import Products from "./pages/products/items/Products";
import ProductDetails from "./pages/products/productDetails/ProductDetails";
import Returns from "./pages/returns/Returns";
import Bag from "./pages/bag/Bag";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b30000",
      //dark red
    },
    secondary: {
      main: "#8798AD",
      // grey
      // #EBF1F4 (light grey)
    },
    error: {
      main: "#ff0000",
      //bright red
    },
    warning: {
      main: "#E38A17",
      // orange
      // #f7b462 (light orange)
    },
    info: {
      main: "#ff00bf",
      //bright pink
    },
    success: {
      main: "#b30086",
      // magenta
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frequently-asked-questions" element={<FAQs />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/my-bag" element={<Bag />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
