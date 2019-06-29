import { el } from "../dtnl";
import { ThemeProvider } from "styled-components";

import Home from "./home";

const theme = {
  color: { primary: "blue" }
};

function App() {
  return el(ThemeProvider, { theme }, el(Home, {}));
}

export default App;
