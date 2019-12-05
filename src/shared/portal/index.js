/* eslint-disable global-require */
/**
 * The Portal resource should be used a helper to decide which Portal exists
 * in project if your React version is lesser than 16 you should add an
 * optionalDepencies like a package documentation
 * @see https://docs.npmjs.com/files/package.json#optionaldependencies
 * the code follows the documentation.
 */

import React from "react";
import ReactDOM from "react-dom";

/**
 * @returns Function
 */
const returnPortal = () => {
  try {
    const { Portal } = require("react-portal");
    return Portal;
  } catch (er) {
    const reactVersion = parseInt(React.version.split(".")[0]);
    if (reactVersion >= 16) {
      return ({ children, node = document.body }) =>
        ReactDOM.createPortal(children, node);
    }
    throw new Error(
      "To use portals required React version 16+ or dependency react-portal"
    );
  }
};

export default returnPortal();
