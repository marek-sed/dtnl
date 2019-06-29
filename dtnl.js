import { Children, createElement } from "react";

let system;
let styled;

const isProps = props =>
  props !== null &&
  typeof props === `object` &&
  !props.children &&
  !props.$$typeof &&
  !Array.isArray(props);

function createNode(type, ...args) {
  const singleChild = args.length === 1;
  let [props, ...children] = singleChild ? [null, ...args] : args;
  if (!singleChild && !isProps(props)) {
    children = [props, ...children];
  }

  let component = system[type] || type;
  if (component.type === "list") {
    children = Children.map(children, child => {
      if (child.type !== system.ListItem.type) {
        return createElement(system.ListItem, {}, child);
      }

      return child;
    });
  }

  props = isProps(props) ? props : {};
  const { css, ...p } = props;
  if (css) {
    component = styled(component)`
      ${css}
    `;
  }

  return createElement(component, p, ...children);
}

function ui(comp, ...args) {
  return (...props) => createNode(comp, ...props);
}

ui.frag = (...children) => createNode(React.Fragment, children);
ui.el = createElement;

ui.injectSystem = (injection, applyCss) => {
  system = injection;
  styled = applyCss;
};

const handler = {
  get: (target, prop) => (prop in target ? target[prop] : ui(prop))
};

const uiSystem = new Proxy(ui, handler);

// this allows us to destructure
module.exports = uiSystem;
module.exports.default = uiSystem;
