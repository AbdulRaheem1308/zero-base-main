import React from "react";
import { getStyle } from "components/tailwind";

const HeaderFieldset = (props) => {
  const { item, child } = props;
  const { theme = "" } = item || {};

  return (
    <header className="header">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: child?.length > 1 ? "space-between" : "center",
          alignItems: "center",
          ...getStyle(theme),
        }}
      >
        {child && child}
      </div>
    </header>
  );
};

export default HeaderFieldset;
