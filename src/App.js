import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/navbar/Navbar";
import Home from "./home/Home";
import "./App.css";
import Footer from "./components/footer/Footer";

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
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
