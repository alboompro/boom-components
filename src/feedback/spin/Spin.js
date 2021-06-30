import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Wrapper, Container, Spinner, Text } from "./styles";

const Spin = ({ delay, size, spinner, spinning, text, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(spinning);
    }, delay);
  }, [spinning]);

  return children ? (
    <>
      <Container show={show} delay={delay} hasChildren>
        <Spinner size={size}>{spinner}</Spinner>
        <Text>{text}</Text>
      </Container>
      <Wrapper show={show}>{children}</Wrapper>
    </>
  ) : (
    <Container show={show}>
      <Spinner size={size}>{spinner}</Spinner>
      <Text>{text}</Text>
    </Container>
  );
};

Spin.propTypes = {
  /** delay in miliseconds for loading state */
  delay: PropTypes.number,
  /** size of spin */
  size: PropTypes.oneOf(["default", "large", "small"]),
  /** spinning indicator */
  spinner: PropTypes.node,
  /** whether spin is spinning */
  spinning: PropTypes.bool,
  /** description content when spin has children */
  text: PropTypes.string
};

Spin.defaultProps = {
  delay: 100,
  size: "default",
  spinner: <div className="loader" />,
  spinning: true,
  text: null
};

export default Spin;
