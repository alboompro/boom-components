import React from "react";
import PropTypes from "prop-types";
import Tabs from "../tabs/Tabs";

import {
  CardStyle,
  HeadStyle,
  BodyStyle,
  TitleStyle,
  ExtraStyle,
  ActionStyle
} from "./styles";
import { Props } from "docz";

const Card = ({
  children,
  title,
  style,
  cover,
  extra,
  actions,
  tabs,
  ...props
}) => {
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

  let getAction = actions => {
    const actionList = actions.map((action, index) => (
      <li style={{ width: `${100 / actions.length}%` }} key={index}>
        <span>{action}</span>
      </li>
    ));
    return actionList;
  };

  return (
    <CardStyle {...StyleProps} style={{ ...style }}>
      {title || extra || tabs ? (
        <div>
          <div>{tabs && tabs.length ? <Tabs tabs={tabs} /> : null}</div>
          {title || extra ? (
            <HeadStyle {...HeadProps}>
              {title && <TitleStyle {...HeadProps}>{title}</TitleStyle>}
              {extra && <ExtraStyle {...HeadProps}>{extra}</ExtraStyle>}
            </HeadStyle>
          ) : null}
        </div>
      ) : null}
      {cover}
      {children && <BodyStyle {...BodyProps}>{children}</BodyStyle>}
      {actions && actions.length ? (
        <ActionStyle>{getAction(actions)}</ActionStyle>
      ) : null}
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
  extra: PropTypes.node,
  /** props tab */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired
    })
  )
};

Card.defaultProps = {
  actions: null,
  bordered: true,
  hoverable: false,
  loading: false,
  size: "default",
  cover: null,
  extra: null,
  tabs: null,
  title: null
};

export default Card;
