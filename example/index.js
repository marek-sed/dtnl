import { injectSystem, el } from "../dtnl";
import styled, { css, ThemeProvider } from "styled-components";
import * as system from "./design-system";

injectSystem(system, styled, css);

import Home from "./home";

const theme = {
  color: { primary: "blue", secondary: "green" }
};

function App() {
  return el(ThemeProvider, { theme }, el(Home, {}));
}

export default App;
