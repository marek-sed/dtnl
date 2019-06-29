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

export const List = styled(Box)``;
List.type = "list";
List.defaultProps = {
  as: "ul"
};

export const ListItem = styled(Box)``;
ListItem.type = "list-item";
ListItem.defaultProps = {
  as: "li"
};
