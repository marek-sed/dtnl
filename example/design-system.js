import styled from "styled-components";
import { Box, Flex } from "rebass";
export { Box, Button, Card, Flex, Image, Heading, Link, Text } from "rebass";
import { flex, typography, space, layout, color } from "styled-system";

// vertical stack
export const vs = styled(Flex)`
  display: flex;
  flex-direction: column;
`;

// horizontal stack
export const hs = styled(Flex)`
  display: flex;
  flex-direction: row;
`;

export const List = styled(Box)`
  list-style: none;
`;
List.type = "list";
List.defaultProps = {
  as: "ul",
  m: 0,
  p: "8px",
  px: "16px"
};

export const ListItem = styled(Box)`
  color: #666;
  text-decoration: underline;
`;

ListItem.type = "list-item";
ListItem.defaultProps = {
  as: "li",
  py: "4px",
  px: 0
};
