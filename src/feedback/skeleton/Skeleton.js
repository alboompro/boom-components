import React, { Component, isValidElement } from "react";
import PropTypes from "prop-types";
import { SkeletonContainer, Square, Circle, Line } from "./shapes";

class Skeleton extends Component {
  renderAvatar = () => {
    const { avatar, animated } = this.props;
    if (typeof avatar === "object") {
      const { rounded, size = 32 } = avatar;
      const Cmp = rounded ? Circle : Square;
      return <Cmp animated={animated} size={size} />;
    }
    return <Square animated={animated} />;
  };

  renderLines = () => {
    const { paragraphs, animated } = this.props;
    const lines = [];
    for (let i = 0; i < paragraphs; i += 1) {
      lines.push(<Line key={`paragraph-${i}`} animated={animated} />);
    }
    return lines;
  };

  renderSkeleton = () => {
    const { template, avatar, title, animated } = this.props;
    if (template && isValidElement(template)) {
      return template;
    }
    return (
      <SkeletonContainer>
        {avatar && <div className="skeleton-avatar">{this.renderAvatar()}</div>}
        <div className="skeleton-content">
          {title && <Line width="100px" height={20} animated={animated} />}
          {this.renderLines()}
        </div>
      </SkeletonContainer>
    );
  };

  render() {
    const { ready, children } = this.props;
    return ready ? children : this.renderSkeleton();
  }
}

Skeleton.propTypes = {
  /** Display a shape that represents a profile picture. Pass an object with rounded = true for rounded shape */
  avatar: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({ rounded: PropTypes.bool, size: PropTypes.number })
  ]),
  /** Whether or not the placeholder contents are animated */
  animated: PropTypes.bool,
  /** Number of paragraphs to show. Set to 0 if you wish to not show paragraphs */
  paragraphs: PropTypes.number,
  /** Display title or not */
  title: PropTypes.bool,
  /** render a custom template as placeholder */
  template: PropTypes.node,
  /** Determines if the original content can be displayed */
  ready: PropTypes.bool.isRequired
};

Skeleton.defaultProps = {
  avatar: false,
  animated: true,
  paragraphs: 2,
  title: false,
  template: null
};

Skeleton.Line = Line;
Skeleton.Circle = Circle;
Skeleton.Square = Square;
Skeleton.SkeletonContainer = SkeletonContainer;

export default Skeleton;
