import React from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";
import { Breadcrumbs, Crumb } from "./styles";

const Breadcrumb = ({crumbs}) => {

  return (
    <Breadcrumbs>
      {
        crumbs.map((crumb, index) => {

          return (
            <Crumb key={index}>
              {crumb.customNode ? crumb.customNode :
                <a href={crumb.link}>
                  {crumb.icon && crumb.icon}{ crumb.name }{ crumb.separator ? crumb.separator : " / " }
                </a>
              }
            </Crumb>
          );
        })
      }
    </Breadcrumbs>
  );
};

Breadcrumb.propTypes = {
  /** routing stack information of router */
  crumbs: PropTypes.arrayOf(PropTypes.object),
  /** item separator */
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** option to add an icon or leave without one */
  icon: PropTypes.element,
  /** custom node if you want to place your style of tag and everything*/
  customNode: PropTypes.node,

};

Breadcrumb.defaultProps = {
  crumbs: {},
  separator: "/",
  icon: null,
  customNode: null
};

export default Breadcrumb;
