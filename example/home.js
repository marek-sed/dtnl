import styled, { css } from "styled-components";
import s, { vs, hs, Text, List, ListItem, div } from "../dtnl";
import * as system from "./design-system";

s.injectSystem(system, styled);

const style = css`
  color: ${({ theme }) => theme.color.primary};
`;

function Home() {
  return vs(
    { css: style, m: 80, fontSize: "16px" },
    s.div({ css: style }, "this is createElement"),
    s.Heading({ mb: 20 }, "This is so much fun"),
    hs(
      { backgroundColor: "beige", justifyContent: "space-between" },
      Text("hello"),
      Text({ color: "teal" }, "world"),
      div("yeah this works")
    ),
    s.Box(
      { color: "black" },
      s.ul(s.li("it's"), s.li("a"), s.li("kind"), s.li("magic")),
      hs(
        { backgroundColor: "white" },
        List("welcome", "to", Text({ color: "hotpink" }, "alabama"))
      ),
      vs({ mt: 50 }, List("renders single item"))
    )
  );
}

export default Home;
