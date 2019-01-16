import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = ({ ...props }) => <div />

Breadcrumb.propTypes = {
  /** custom item renderer: (route, params, routes, paths) => ReactNode */
  itemRenderer: PropTypes.func,
  /** routing parameters */
  params: PropTypes.object,
  /** routing stack information of router */
  routes: PropTypes.arrayOf(PropTypes.object),
  /** item separator */
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

Breadcrumb.defaultProps = {
  separator: '/'
}

export default Breadcrumb
