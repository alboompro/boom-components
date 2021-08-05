import React from "react";
import PropTypes from "prop-types";
import { Button, Container, Popover } from "./styles";

const Popconfirm = ({
  children, 
  position,
  containerStyle,
  visible,
  popoverContent,
  footerContent
  }) => {
  
  return (
    <Container style={{containerStyle}}>
      {children}
      <Popover position={{top:position.top, right:position.right, left:position.left, bottom:position.bottom}}
        className={visible ? "popover-show" : "popover-hidden"}>
        <div className="popover-message">
          { popoverContent }
        </div>
          { footerContent ? footerContent :
            <section>
              <Button style={{"marginRight":"10px", "backgroundColor":"green", "color":"white"}}
                onClick={() => {alert("Sucesso!")}}>Accept</Button>
              <Button style={{"backgroundColor":"Red", "color":"white"}} 
                onClick={() => {alert("Cancelado!")}}>Deny</Button>
            </section>
          }
      </Popover>
    </Container>
  )
}

Popconfirm.propTypes = {
  /** Property to make the popover hide and show */
  visible: PropTypes.bool.isRequired,
  /** Content placeable in the body of the popover*/
  popoverContent: PropTypes.node.isRequired,
  /** Popover footer content (buttons recommended to place your desirable actions)*/
  footerContent: PropTypes.node,
  /** Defines the top, right, bottom, left of the popover */
  position: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    left: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }),
  /** Defines the width from the Container */
  containerStyle: PropTypes.object
};

Popconfirm.defaultProps = {
  visible: false,
  position: {
    top: "20px",
    right: null,
    left: "70px",
    bottom: null
  },
  containerStyle: {width:"800px"},
  footerContent: null
};

export default Popconfirm;
