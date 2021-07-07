import React from "react";
import PropTypes from "prop-types";

import { CardStyle, HeadStyle, BodyStyle, TitleStyle } from "./styles";

const Card = ({ children, title, style, cover, footer, ...props }) => {
  const StyleProps = {
    bordered: props.bordered,
    hoverable: props.hoverable,
    ...props
  };

  const HeadProps = {
    size: props.size
  };

  const BodyProps = {
    size: props.size,
    cover: cover
  };

  return (
    <CardStyle {...StyleProps} style={{ ...style }}>
      {title && (
        <HeadStyle {...HeadProps}>
          <TitleStyle {...HeadProps}>{title}</TitleStyle>
        </HeadStyle>
      )}
      {cover}
      {children && <BodyStyle {...BodyProps}>{children}</BodyStyle>}
      {footer}
    </CardStyle>
  );
};

Card.propTypes = {
  /** card title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** size of the card */
  size: PropTypes.oneOf(["default", "small"]),
  /** card cover */
  cover: PropTypes.node,
  /** node that will stay in the footer of the card */
  footer: PropTypes.node,
  /** whether card will have a border around of it */
  bordered: PropTypes.bool,
  /** lift up card when hovering */
  hoverable: PropTypes.bool
};

Card.defaultProps = {
  footer: null,
  bordered: true,
  hoverable: false,
  size: "default",
  cover: null,
  title: null
};

export default Card;
