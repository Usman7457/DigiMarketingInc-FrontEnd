import React from "react";

const Helmet = (props) => {
  document.title = "DMI - " + props.title;
  return <>{props.children}</>;
};

export default Helmet;
