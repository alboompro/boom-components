import React from "react";
import PropTypes from "prop-types";
import { Container, Popover, Button } from "./styles";

const Popconfirm = ({actionHandler, position, title, okText, cancelText, containerWidth, confirm, cancel, visible}) => {
  
  return(
    <Container style={{width:containerWidth}}>
      {actionHandler}
      <Popover position={{top:position.top, right:position.right, left:position.left, bottom:position.bottom}} className={visible ? "popover-show" : "popover-hidden"}>
        <div className="popover-message">
          {title}
        </div>
        <section>
          <Button onClick={confirm}>{okText}</Button>
          <Button style={{backgroundColor:"red"}} onClick={cancel}>{cancelText}</Button>
        </section>
      </Popover>
    </Container>
  )
}

Popconfirm.propTypes = {
  /** Tag that's gonna display the message to use the popover */
  actionHandler: PropTypes.element.isRequired,
  /** Property to make the popover hide and show */
  visible:PropTypes.bool.isRequired,
  /** Text displayed on the confirmation */
  title: PropTypes.element.isRequired,
  /** Callback on confirmation button click */
  confirm: PropTypes.func.isRequired,
  /** Callback on cancel button click */
  cancel: PropTypes.func.isRequired,
  /** Text that goes inside of ok button */
  okText: PropTypes.string,
  /** Text that goes inside of cancel button */
  cancelText: PropTypes.string,

  /** Defines the top, right, bottom, left of the popover */
  position: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  /** Defines the width from the Container */
  containerWidth: PropTypes.string
};

Popconfirm.defaultProps = {
  actionHandler: <a href="#">Delete</a>,
  title: <p>Confirmation text</p>,
  confirm: null,
  cancel: null,
  okText: "OK",
  cancelText:"Cancel",
  position: {
    top: "20px",
    right: null,
    left: "50px",
    bottom: null
  },
  containerWidth: null
};

export default Popconfirm;
