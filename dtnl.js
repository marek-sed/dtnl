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

function ui(comp) {
  return (...args) => {
    const [props, ...children] = args;
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

ui.injectSystem = function(injection, cssinjs) {
  system = injection;
  styled = cssinjs;
};

const handler = {
  get: (target, prop) => (prop in target ? target[prop] : ui(prop))
};

const uiSystem = new Proxy(ui, handler);

// this allows us to destructure
module.exports = uiSystem;
module.exports.default = uiSystem;
