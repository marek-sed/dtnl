import { createElement } from "react";
import s, { vs, hs, Text, List, ListItem, div } from "../dtnl";
import * as system from "./design-system";

s.injectSystem(system);

function Home() {
  return vs(
    { p: 40, color: "palevioletred", fontSize: "16px" },
    s.Heading({ color: "plum" }, "This is so much fun"),
    hs(
      { backgroundColor: "beige", width: 800, justifyContent: "space-between" },
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
