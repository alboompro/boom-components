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
  /** receives an array of objects that have "label", and "component", label must be string, and component must be an element */
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      component: PropTypes.element.isRequired
    })
  ).isRequired,
  /** if you want a specific tab/component to be displayed first, enter a number */
  initialTab: PropTypes.number
};

Tabs.defaultProps = {
  initialTab: 0
};

export default Tabs;
