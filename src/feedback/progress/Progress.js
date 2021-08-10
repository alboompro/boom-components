import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";

import {
  ProgressWrapper,
  ProgressBar,
  Bar,
  ContainerBar,
  ProgressText
} from "./styles.js";

const Progress = ({
  min,
  total,
  current,
  showLabel,
  unitMeasurement,
  customLabel,
  styleProgress,
  color,
  icons,
  ...props
}) => {
  const [status, setStatus] = React.useState(0);

  const progressProps = {
    min,
    max: total,
    value: current,
    color,
    loading: props.loading,
    styleProgress
  };

  const textProps = {
    unitMeasurement,
    styleText: props.styleText
  };

  useEffect(() => {
    if (current >= total) {
      // If the progress is 100%
      setStatus(2);
    } else if (current > min && current < total) {
      // If the progress is not 100%
      setStatus(1);
    } else if (current == min) {
      // If the progress is 0%
      setStatus(0);
    }
  }, [current, total, min]);

  const getLabel = () =>
    customLabel ? (
      <span>{customLabel[status]}</span>
    ) : (
      <span>{`${current}${unitMeasurement}`}</span>
    );

  const renderLabel = () =>
    showLabel && <ProgressText {...textProps}>{getLabel()}</ProgressText>;

  return (
    <ProgressWrapper>
      <ContainerBar className="outer">
        <Bar className="inner">
          <ProgressBar {...progressProps} />
        </Bar>
      </ContainerBar>
      {renderLabel()}
    </ProgressWrapper>
  );
};

Progress.propTypes = {
  /** Minimum value of the progress bar */
  min: PropTypes.number,
  /** Total value for the progress bar */
  total: PropTypes.number,
  /** Current value of the progress bar */
  current: PropTypes.number,
  /** Current progress bar color */
  color: PropTypes.string,
  /** Enables progress bar label */
  showLabel: PropTypes.bool,
  /** Measuring unit used on progress bar label */
  unitMeasurement: PropTypes.string,
  /** Custom Nodes Array for Progress bar Label */
  customLabel: PropTypes.array,
  /** Enables progress bar with charging animation */
  loading: PropTypes.bool,
  /** Style object for progress bar */
  styleProgress: PropTypes.object,
  /** Style object for progress bar label */
  styleText: PropTypes.object
};

Progress.defaultProps = {
  min: 0,
  total: 100,
  current: 0,
  color: "royalblue",
  showLabel: false,
  unitMeasurement: "%",
  styleProgress: {},
  styleText: {}
};

export default Progress;
