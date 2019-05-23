import React from "react";
import PropTypes from "prop-types";

const Icon = ({ kind, group, category, file, size, color, width, height }) => {
  const formattedColor = color.replace("#", "");
  const w = size || width;
  const h = size || height;
  return (
    <img
      alt="Icone"
      src={`https://icons.alboompro.com/v1/${kind}/${group}/${category}/${formattedColor}/${file}`}
      width={w}
      height={h}
    />
  );
};

Icon.propTypes = {
  /** Type of stroke for the icon */
  kind: PropTypes.oneOf(["bold", "light", "regular"]),
  /** Group identifier for the icon being rendered */
  group: PropTypes.string.isRequired,
  /** Category identifier for the icon being rendered */
  category: PropTypes.string.isRequired,
  /** Name for the icon being rendered */
  file: PropTypes.string.isRequired,
  /** Width of the icon */
  width: PropTypes.string,
  /** Height of the icon */
  height: PropTypes.string,
  /** Easily set both widht and height of the icon using this property. If provided, it'll override valus passed in widht and height. */
  size: PropTypes.string,
  /** Color for the icon, pass it as a hex color (ie: "#C1C1C1") */
  color: PropTypes.string
};

Icon.defaultProps = {
  kind: "regular",
  width: "32",
  height: "32",
  size: null,
  color: "#000000"
};

export default Icon;
