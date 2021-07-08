import React from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";
import { Container, Breadcrumbs, Crumb } from "./styles";

const Breadcrumb = ({crumbs, selected}) => {

  return (
    <Container>
      <nav>
        <Breadcrumbs>
          {
            crumbs.map((crumb) => {

              return (
                <Crumb key={crumb.name}>
                  <a href={crumb.link} onClick={ () => selected(crumb) }>
                  { crumb.icon ? "" : crumb.separator }{crumb.icon && crumb.icon}{ crumb.name }
                  </a>
                </Crumb>
              );
            })
          }
        </Breadcrumbs>
      </nav>
    </Container>
  );
};

Breadcrumb.propTypes = {
  /** routing stack information of router */
  crumbs: PropTypes.arrayOf(PropTypes.object),
  /** item separator */
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** current selected crumb */
  selected: PropTypes.func,
  /** option to add an icon or leave without one */
  icon: PropTypes.element 
};

Breadcrumb.defaultProps = {
  crumbs: {},
  separator: "/",
  selected: noop,
  icon: null
};

export default Breadcrumb;
