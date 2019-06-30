import { Children, createElement } from "react";

let system;
let styled;

const isProps = props =>
  props !== null &&
  typeof props === `object` &&
  !props.children &&
  !props.$$typeof &&
  !Array.isArray(props);

function createNode(type, props, children) {
  let component = system[type] || type;
  if (component.type === "list") {
    children = Children.map(children, child => {
      if (child.type !== system.ListItem.type) {
        return createElement(system.ListItem, {}, child);
      }

      return child;
    });
  }

  const { css, ...p } = props;
  if (css) {
    component = styled(component)`
      ${css}
    `;
  }

  if (Array.isArray(children)) {
    return createElement(component, p, ...children);
  }
  return createElement(component, p, children);
}

function style(comp, css) {
  return styled(comp)`
    ${css}
  `;
}

function ui(comp) {
  return function(...args) {
    const [props, ...children] = args;
    if (Array.isArray(props)) {
      return style(comp, props);
    }

    if (isProps(props)) {
      if (children.length) {
        return createNode(comp, props, children);
      } else {
        return (...children) => createNode(comp, props, children);
      }
    }

    return createNode(comp, {}, args);
  };
}

ui.frag = (...children) => createNode(React.Fragment, children);
ui.el = createElement;

const handler = {
  get: (target, prop) => (prop in target ? target[prop] : ui(prop))
};

const uiSystem = new Proxy(ui, handler);

function injectSystem(injection, cssinjs) {
  system = injection;
  styled = cssinjs;
}
uiSystem.injectSystem = injectSystem;
// this allows us to destructure
module.exports = uiSystem;
module.exports.default = uiSystem;
