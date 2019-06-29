import { createElement } from "react";
import styled, { css } from "styled-components";
import { flex, typography, space, layout, color } from "styled-system";

// my-system
const Box = styled.div`
  ${color}
  ${flex}
  ${layout}
  ${space}
`;

const VBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const HBox = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const List = styled(Box)``;
List.type = "list"
List.defaultProps = {
  as: "ul"
};

export const ListItem = styled(Box)``;
ListItem.type = "list-item"
ListItem.defaultProps = {
  as: "li"
};

export const Text = styled(Box)``;

export const vs = VBox;
export const hs = HBox;
