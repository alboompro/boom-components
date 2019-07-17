import React, { Component } from "react";
import shallowEqual from "shallowequal";
import cx from "classnames";

class PanelContent extends Component {
  shouldComponentUpdate(nextProps) {
    const { forceRender } = this.props;
    return forceRender || !shallowEqual(this.props, nextProps);
  }

  render() {
    const { forceRender, isActive, role, children } = this.props;
    this.isActived = forceRender || this.isActived || isActive;
    if (!this.isActived) {
      return null;
    }

    const ContentClasses = cx("body", {
      "body-active": isActive,
      "body-inactive": !isActive
    });
    const child =
      !forceRender && !isActive ? null : (
        <div className="body-content-box">{children}</div>
      );
    return <div className={ContentClasses}>{child}</div>;
  }
}

export default PanelContent;
