/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, ContainerInner } from "./styles";

const Tabs = ({ tabs, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return (
    <Container>
      <div className="tabs">
        {tabs.map(({ label }, index) => (
          <a
            className={activeTab === index ? "active" : null}
            onClick={() => setActiveTab(index)}
            key={index}
          >
            {label}
          </a>
        ))}
      </div>

      <ContainerInner>{tabs[activeTab].component}</ContainerInner>
    </Container>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired
    })
  ).isRequired,
  initialTab: PropTypes.number
};

Tabs.defaultProps = {
  initialTab: 0
};

export default Tabs;
