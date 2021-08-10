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
  showIcon,
  showText,
  unitMeasurement,
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

  const renderIcon = () => showIcon && <span>{icons && icons[status]}</span>;

  const renderLabel = () => {
    if (showText || showIcon) {
      return (
        <ProgressText {...textProps}>
          <span>{`${current}${unitMeasurement}`}</span>
          {renderIcon()}
        </ProgressText>
      );
    }
  };

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
  /** Show/Hide icon on progress bar label */
  showIcon: PropTypes.bool,
  /** Array of icons for progress bar label */
  icons: PropTypes.object,
  /** Show/Hide text on progress bar label */
  showText: PropTypes.bool,
  /** Measuring unit used on progress bar label */
  unitMeasurement: PropTypes.string,
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
  showIcon: false,
  showText: false,
  unitMeasurement: "%",
  styleProgress: {},
  styleText: {}
};

export default Progress;
