import React from "react";
import PropTypes from "prop-types";

const Badge = ({
  children,
  color,
  type,
  background,
  padding,
  borderRadius,
  fontSize,
  textAlign,
  display,
  pos,
  ...props
}) => {
  function setBackgroundColor() {
    if (!type) {
      return background;
    }
    if (type === "success") {
      return "#52C41A";
    }
    if (type === "error") {
      return "#FF4D4F";
    }
    return "#44ADF8";
  }

  return (
    <div
      style={{
        color,
        backgroundColor: setBackgroundColor(),
        padding,
        borderRadius,
        fontSize,
        textAlign,
        display,
        position: pos.position,
        top: pos.top,
        right: pos.right,
        bottom: pos.bottom,
        left: pos.left
      }}
      {...props}
    >
      {children}
    </div>
  );
};

Badge.propTypes = {
  /** defines the text of the badge */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  /** defines color of the text, can be hex or text */
  color: PropTypes.string.isRequired,
  /** defines the background color based on the type passed */
  type: PropTypes.oneOf(["success", "error", "default", null]),
  /** defines the background color of the badge as a custom color (without the type) */
  background: PropTypes.string,
  /** set a space around the badge content, must contain the measure, example: "10px", "5px 10px 15px 20px" */
  padding: PropTypes.string,
  /** rounds the badge border, must contain the measure, example: "10px", "50%"" */
  borderRadius: PropTypes.string,
  /** defines the font size of the badge, must contain the measure, example: "10px", "1rem"", */
  fontSize: PropTypes.string,
  /** defines the text alignment in the badge */
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  /** sets the badge style display */
  display: PropTypes.oneOf(["inline", "inline-block", "block", "none"]),
  /** customize the positioning of the Badge, it must contain the measures, example: "10px" */
  pos: PropTypes.shape({
    position: PropTypes.string,
    top: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string
  })
};

Badge.defaultProps = {
  type: null,
  background: "unset",
  padding: "unset",
  borderRadius: "8px",
  fontSize: "1rem",
  textAlign: "center",
  display: "inline",
  pos: {
    position: "static",
    top: "unset",
    right: "unset",
    bottom: "unset",
    left: "unset"
  }
};

export default Badge;
