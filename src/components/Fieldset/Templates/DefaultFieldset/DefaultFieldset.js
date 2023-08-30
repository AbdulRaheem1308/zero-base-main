import React from "react";
import { getStyle } from "components/tailwind";

const DefaultFieldset = (props) => {
  return (
    <div style={getStyle(props.item?.theme) ?? { flex: 1 }}>
      {props.child && props.child}
    </div>
  );
};

export default DefaultFieldset;
