import React from "react";
import PropTypes from "prop-types";

import {
  ProgressWrapper,
  ContainerBar,
  ProgressLine,
  ProgressTrailLine,
  ProgressLineLabel,
  ProgressCircle,
  ProgressTrailCircle,
  ProgressCircleLabel
} from "./styles.js";

const Progress = ({ current, hideLabel, color, format, ...props }) => {
  const progressProps = {
    value: current,
    color,
    loading: props.loading
  };

  const containerProps = {
    format,
    loading: props.loading
  };

  const wrapperProps = {
    width: props.width
  };

  const getPath = (cx, cy, r) =>
    "M " +
    cx +
    " " +
    cy +
    " m -" +
    r +
    ", 0 a " +
    r +
    "," +
    r +
    " 0 1,0 " +
    r * 2 +
    ",0 a " +
    r +
    "," +
    r +
    " 0 1,0 -" +
    r * 2 +
    ",0";

  const renderLabel = () =>
    !hideLabel &&
    (format == "linear" ? (
      <ProgressLineLabel>{`${current}%`}</ProgressLineLabel>
    ) : (
      <ProgressCircleLabel>{`${current}%`}</ProgressCircleLabel>
    ));

  const renderProgressBar = () =>
    format == "linear" ? (
      <ProgressTrailLine>
        <ProgressLine {...progressProps} />
      </ProgressTrailLine>
    ) : (
      <svg viewBox="0 0 100 100">
        <ProgressTrailCircle
          d={getPath(50, 50, 47)}
          strokeLinecap="round"
          fill="none"
          fillOpacity={0}
          strokeWidth={6}
          strokeOpacity={0.5}
        />
        <ProgressCircle
          d={getPath(50, 50, 47)}
          strokeLinecap="round"
          fill="none"
          fillOpacity={0}
          strokeWidth={6}
          strokeOpacity={0.5}
          {...progressProps}
        />
      </svg>
    );

  return (
    <ProgressWrapper {...wrapperProps}>
      <ContainerBar {...containerProps}>
        {renderProgressBar()}
        {renderLabel()}
      </ContainerBar>
    </ProgressWrapper>
  );
};

Progress.propTypes = {
  /** Current value of the progress bar */
  current: PropTypes.number,
  /** Current progress bar color */
  color: PropTypes.string,
  /** Disable progress bar label */
  hideLabel: PropTypes.bool,
  /** Enables progress bar with charging animation */
  loading: PropTypes.bool,
  /** Choose the format of the progress bar */
  format: PropTypes.oneOf(["linear", "circular"]),
  /** Width of the progress bar */
  width: PropTypes.number
};

Progress.defaultProps = {
  current: 0,
  color: "royalblue",
  format: "linear",
  hideLabel: false,
  loading: true
};

export default Progress;
