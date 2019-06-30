import { Provider } from "mobx-react";
import { injectSystem, el } from "../dtnl";
import styled, { ThemeProvider } from "styled-components";
import * as system from "./design-system";
import { compose } from "./utils";

injectSystem(system, styled);
const Home = require("./home").default;

const theme = {
  color: { primary: "blue", secondary: "green" }
};

const cure = comp => props => children => el(comp, props, children);
const [themeProvider, home] = [ThemeProvider, Home].map(cure);

function App() {
  const AppComponent = compose(
    themeProvider({ theme }),
    home({})
  );

  return AppComponent({});
}

export default App;
