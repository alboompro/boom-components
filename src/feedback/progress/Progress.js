import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";

import {
  ProgressWrapper,
  ProgressBar,
  Bar,
  ContainerBar,
  ProgressText
} from "./styles.js";

const Progress = ({ min, total, current, text, textType }) => {
  const progressProps = {
    min,
    max: total,
    value: current
  };

  const renderLabel = () =>
    text && (
      <ProgressText>
        <span>{`${current}${textType}`}</span>
      </ProgressText>
    );

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
  /** The total progress */
  total: PropTypes.number,
  /** The current progress */
  current: PropTypes.number,
  /** The current progress bar color */
  color: PropTypes.string,
  /** The template function of the content */
  template: PropTypes.func,
  /** Show/Hide Text of progress bar */
  text: PropTypes.bool,
  /** Type of Text of progress bar */
  textType: PropTypes.string,
  /** Style of progress bar */
  style: PropTypes.object
};

Progress.defaultProps = {
  min: 0,
  total: 100,
  current: 0,
  color: "",
  template: noop,
  text: false,
  textType: "%",
  style: {}
};

export default Progress;
