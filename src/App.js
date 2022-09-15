import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";
import Footer from "./components/footer/Footer";
import Women from "./pages/products/women/Women";
import Men from "./pages/products/men/Men";
import Children from "./pages/products/children/Children";
import Baby from "./pages/products/baby/Baby";
import School from "./pages/products/school/School";
import Accessories from "./pages/products/accessories/Accessories";
import Privacy from "./pages/legals/privacy/Privacy";
import Terms from "./pages/legals/terms/Terms";
import Contact from "./pages/contact/Contact";
import FAQs from "./pages/faqs/FAQs";
import About from "./pages/about/About";

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
          <Route path="/ladies" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/children" element={<Children />} />
          <Route path="/baby" element={<Baby />} />
          <Route path="/school" element={<School />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/frequently-asked-questions" element={<FAQs />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
