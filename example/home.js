import { css } from "styled-components";
import s, { vs, hs, Text, List, ListItem, div } from "../dtnl";

const blue = css`
  color: ${({ theme }) => theme.color.primary};
`;
const green = css`
  color: ${({ theme }) => theme.color.secondary};
`;
const violet = css`
  color: palevioletred;
`;

function Home() {
  return vs({ css: green, m: 80, fontSize: "16px" })(
    div({ css: blue }, "this is createElement"),
    s.Heading({ mb: 20 }, "This is so much fun"),
    hs({ backgroundColor: "beige", justifyContent: "space-between" })(
      Text("hello"),
      Text({ color: "teal" })("world"),
      div("yeah this works")
    ),
    s.Box({ color: "black" })(
      s.ul(s.li("it's"), s.li("a"), s.li("kind"), s.li("of"), s.li("magic")),
      hs({ backgroundColor: "lightblue" })(
        List({ css: violet })(Text("welcome"), "to", Text({ color: "orange" }, "alabama"))
      ),
      vs({ mt: 50 })(List("renders single item"))
    )
  );
}

export default Home;
