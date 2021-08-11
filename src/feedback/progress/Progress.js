import React from "react";
import PropTypes from "prop-types";

import {
  ProgressWrapper,
  ProgressBar,
  Bar,
  ContainerBar,
  ProgressText
} from "./styles.js";

const Progress = ({
  current,
  hideLabel,
  unitMeasurement,
  customLabel,
  color,
  ...props
}) => {
  const progressProps = {
    value: current,
    color,
    loading: props.loading
  };

  const renderLabel = () =>
    !hideLabel && (
      <ProgressText>
        <span>{`${current}%`}</span>
      </ProgressText>
    );

  return (
    <ProgressWrapper>
      <ContainerBar>
        <Bar>
          <ProgressBar {...progressProps} />
        </Bar>
      </ContainerBar>
      {renderLabel()}
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
  /** Width of the progress bar */
  width: PropTypes.number,
};

Progress.defaultProps = {
  current: 0,
  color: "royalblue",
  hideLabel: false,
  loading: true
};

export default Progress;
