import React from "react";
import "./DefaultList.scss";

const DefaultList = (props) => {
  const { item } = props;
  const { titleClassName, contentClassName, extra = {} } = item || {};
  const { items } = extra;

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "20px",
      }}
    >
      {items.length > 0 ? (
        items.map((i, key) => {
          return (
            <div className="container-list">
              <div className={`${titleClassName} title-list`}>{i.title}</div>
              <div className={`${contentClassName} content-list`}>
                {i.content}
              </div>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default DefaultList;
