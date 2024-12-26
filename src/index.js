import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
// Material Ui
import { ThemeProvider, createTheme } from "@mui/material/styles";
const root = ReactDOM.createRoot(document.getElementById("root"));


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

root.render(
  <>
   <ThemeProvider theme={darkTheme}>
    <Router>
      <App />
    </Router>
    </ThemeProvider>
  </>
);
