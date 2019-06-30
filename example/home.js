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

const header = ["col1", "col2", "col3"].map(v => s.th(v));
const getRow = number => [`col${number}-1`, `col${number}-2`, `col${number}-3`].map(v => s.td(v));
const rows = [1, 2, 3, 4].map(getRow).map(v => s.tr(...v));
const Table = s.table(s.thead(s.tr(...header)), s.tbody(...rows));

function Home({ store, ...props }) {
  return vs({ css: green, m: 80, fontSize: "16px" })(
    s.div("wow"),
    div({ css: blue }, "this is createElement"),
    s.Heading({ mb: 20 }, "This is so much fun"),
    hs({ backgroundColor: "beige", justifyContent: "space-between" })(
      Text("hello"),
      Text({ color: "teal" })("world"),
      div("yeah this works")
    ),
    s.Box(
      s.ul(s.li("it's"), s.li("a"), s.li("kind"), s.li("of"), s.li("magic")),
      hs({ backgroundColor: "lightblue" })(
        List({ css: violet })(Text("welcome"), "to", Text({ color: "orange" }, "alabama"))
      ),
      vs({ mt: 50 })(List("renders single item"))
    ),
    s.Box({ mt: 20 }, Table)
  );
}

export default Home;
