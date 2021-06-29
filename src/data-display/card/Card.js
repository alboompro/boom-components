import React from "react";
import PropTypes from "prop-types";

import {
  CardStyle,
  HeadStyle,
  BodyStyle,
  TitleStyle,
  ExtraStyle,
  ActionStyle
} from "./styles";

const Card = ({ children, title, style, cover, extra, actions, ...props }) => {
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

  let head = React.ReactNode; // Se TS seria head: React.ReactNode (anotação de tipo)
  if (title || extra) {
    head = (
      <HeadStyle {...HeadProps}>
        {title && <TitleStyle {...HeadProps}>{title}</TitleStyle>}
        {extra && <ExtraStyle {...HeadProps}>{extra}</ExtraStyle>}
      </HeadStyle>
    );
  }

  const coverDOM = cover ? { cover } : null;

  const body = <BodyStyle {...BodyProps}>{children}</BodyStyle>;

  let getAction = actions => {
    const actionList = actions.map((action, index) => (
      <li style={{ width: `${100 / actions.length}%` }} key={index}>
        <span>{action}</span>
      </li>
    ));
    return actionList;
  };

  const actionDOM =
    actions && actions.length ? (
      <ActionStyle>{getAction(actions)}</ActionStyle>
    ) : null;

  // const actionDOM =

  return (
    <CardStyle {...StyleProps} style={{ ...style }}>
      {head}
      {cover ? cover : ""}
      {body}
      {actionDOM}
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
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** content to render in the top-right corner of the card */
  extra: PropTypes.node
};

Card.defaultProps = {
  actions: null,
  bordered: true,
  hoverable: false,
  loading: false,
  size: "default",
  cover: null,
  extra: null,
  title: null
};

export default Card;
