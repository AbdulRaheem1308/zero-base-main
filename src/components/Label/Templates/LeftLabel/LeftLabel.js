import React from "react";
import { getStyle } from "components/tailwind";

const DEFAULT = {
  fontSize: 14,
  fontFamily: "Montserrat",
  textAlign: "left",
  color: "#000000",
};

const LeftLabel = (props) => {
  const { item, managedCallback } = props;
  const {
    action,
    theme = "",
    label = "",
    header = "",
    description = "",
  } = item || {};

  const onPress = () => {
    managedCallback({ item });
  };

  if (header?.length > 0 && description?.length > 0) {
    return (
      <>
        <div
          style={{
            ...DEFAULT,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "20px",
            textAlign: "left",
            ...getStyle(theme),
          }}
        >
          {header}
        </div>
        {description?.length > 0 && (
          <div
            style={{
              ...DEFAULT,
              marginTop: 4,
              fontSize: 16,
              fontWeight: 600,
              lineHeight: "20px",
              textAlign: "left",
              ...getStyle(theme),
            }}
          >
            {description}
          </div>
        )}
      </>
    );
  }
  return action ? (
    <div style={{ ...DEFAULT, ...getStyle(theme) }} onPress={onPress}>
      {label}
    </div>
  ) : (
    <div style={{ ...DEFAULT, ...getStyle(theme) }}>{label}</div>
  );
};

export default LeftLabel;
