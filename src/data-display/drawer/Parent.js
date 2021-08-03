import React, { Fragment, useEffect } from "react";
import Drawer from "./Drawer";

const Parent = ({ ...props }) => {
  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // useEffect(() => {
  //   isDrawerOpen ? (
  //     render()}
  //   ) : null;
  // }, [isDrawerOpen]);

  // Function to close drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  // Function to toggle Drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Fragment>
      <button onClick={() => toggleDrawer()}>Open Drawer</button>
      <Drawer visible={isDrawerOpen} handleClose={closeDrawer} {...props} />
    </Fragment>
  );
};

export default Parent;
