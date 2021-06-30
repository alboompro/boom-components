import React from "react";
import PropTypes from "prop-types";
import { MetaTitleStyle, AvatarStyle, DetailStyle } from "./styles";

const Meta = ({ title, description, avatar, ...props }) => {
  return (
    <div
      {...props}
      style={{
        margin: "-4px 0"
      }}
    >
      <div style={{ float: "left", paddingRight: "16px" }}>
        {avatar ? <AvatarStyle>{avatar}</AvatarStyle> : null}
      </div>
      <DetailStyle style={{ overflow: "hidden" }}>
        {title ? <MetaTitleStyle>{title}</MetaTitleStyle> : null}
        {description ? <div>{description}</div> : null}
      </DetailStyle>
    </div>
  );
};

Meta.propTypes = {
  /** title content */
  title: PropTypes.node,
  /** description content */
  description: PropTypes.node,
  /** avatar or icon */
  avatar: PropTypes.node
};

Meta.defaultProps = {
  title: null,
  description: null,
  avatar: null
};

export default Meta;
