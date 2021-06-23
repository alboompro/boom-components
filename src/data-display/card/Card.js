import React from "react";
import PropTypes from "prop-types";
import { CardStyle, CardHead, CardBody } from "./styles";

const Card = ({ children, title, ...props }) => {
  return (
    <CardStyle {...props}>
      <CardHead>
        <h2>{title}</h2>
      </CardHead>
      <CardBody>{children}</CardBody>
    </CardStyle>
  );
};

Card.propTypes = {
  /** actions list which shows at the bottom of the card */
  actions: PropTypes.arrayOf(PropTypes.node),
  /** whether card will have a border around of it */
  bordered: PropTypes.bool,
  /** lift up card when hovering */
  hoverable: PropTypes.bool,
  /** show a skeleton instead of content */
  loading: PropTypes.bool,
  /** size of the card */
  size: PropTypes.oneOf(["default", "small"]),
  /** card title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Card.defaultProps = {
  actions: null,
  bordered: true,
  hoverable: false,
  loading: false,
  size: "default",
  title: null
};

export default Card;
