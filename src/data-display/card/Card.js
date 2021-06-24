import React from "react";
import PropTypes from "prop-types";
import { CardStyle, CardHead, CardBody } from "./styles";

const Card = ({ children, title, style, ...props }) => {
  const StyleProps = {
    bordered: props.bordered,
    hoverable: props.hoverable,
    ...props
  };

  const HeadProps = {
    size: props.size
  };

  const BodyProps = {
    size: props.size
  };

  return (
    <CardStyle {...StyleProps} style={{ ...style }}>
      <CardHead {...HeadProps}>
        <h2>{title}</h2>
      </CardHead>
      <CardBody {...BodyProps}>{children}</CardBody>
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
  /** card cover */
  cover: PropTypes.node,
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
