import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ ...props }) => <div />

Card.propTypes = {
  /** actions list which shows at the bottom of the card */
  actions: PropTypes.arrayOf(PropTypes.node),
  /** inline style applied to body */
  bodyStyle: PropTypes.object,
  /** whether card will have a border around of it */
  bordered: PropTypes.bool,
  /** card cover */
  cover: PropTypes.node,
  /** top-right corner content */
  extra: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /** inline style applied to header */
  headerStyle: PropTypes.object,
  /** lift up card when hovering */
  hoverable: PropTypes.bool,
  /** show a skeleton instead of content */
  loading: PropTypes.bool,
  /** size of the card */
  size: PropTypes.oneOf(['default', 'small']),
  /** card title */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

Card.defaultProps = {
  bordered: true,
  hoverable: false,
  loading: false,
  size: 'default'
}

export default Card
