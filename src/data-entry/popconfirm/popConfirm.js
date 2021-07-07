import React, { useState } from "react";
import PropTypes from "prop-types";
import { noop } from "../../helpers";
import { Container, Popover, Button } from "./styles";

const Popconfirm = ({placement, title, okText, cancelText, containerWidth}) => {
  const [visible, setVisible] = useState(false);
  
  function confirm(e){
    console.log(e, "success");
  };

  function cancel(e){
    console.log(e, "cancel");
  };



  return(
    <Container style={{width:containerWidth}}>
      <a style={{cursor:"pointer"}} onClick={() => setVisible(!visible)}>Delete</a>
      <Popover placement={{top:placement.top, right:placement.right, left:placement.left, bottom:placement.bottom}} className={visible ? "popover-show" : "popover-hidden"}>
        <p className="popover__message">{title}</p>
        <section>
          <Button onClick={confirm}><span>{okText}</span></Button>
          <Button style={{backgroundColor:"red"}} onClick={cancel}><span>{cancelText}</span></Button>
        </section>
      </Popover>
    </Container>
  )
}

Popconfirm.propTypes = {
  /** Text displayed on the confirmation */
  title: PropTypes.string,
  /** Callback on confirmation button click */
  confirm: PropTypes.func,
  /** Callback on cancel button click */
  cancel: PropTypes.func,
  /** Text that goes inside of ok button */
  okText: PropTypes.string,
  /** Text that goes inside of cancel button */
  cancelText: PropTypes.string,
  /** Defines the top, right, bottom, left of the popover */
  placement: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  /** Defines the width from the Container */
  containerWidth: PropTypes.string
};

Popconfirm.defaultProps = {
  title: "Confirmation text",
  confirm: null,
  cancel: null,
  okText: "OK",
  cancelText:"Cancel",
  placement: {
    top: null,
    right: null,
    left: null,
    bottom: null
  },
  containerWidth: null
};

export default Popconfirm;
