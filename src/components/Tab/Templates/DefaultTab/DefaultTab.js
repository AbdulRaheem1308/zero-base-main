import React, { useRef, useState } from "react";
import { DefaultBlock as Block } from "components/Block/Templates/DefaultBlock";
import { Tabs, Swiper } from "antd-mobile";

import "./DefaultTab.scss";

const DefaultTab = (props) => {
  const { item } = props;
  const { extra } = item || {};
  const { tabItems } = extra || {};
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Block padding="0">
      <Tabs
        className="navigationTabs"
        activeKey={tabItems[activeIndex].key}
        onChange={(key) => {
          const index = tabItems.findIndex((item) => item.key === key);
          setActiveIndex(index);
          swiperRef.current.swipeTo(index);
        }}
      >
        {tabItems.map((item) => (
          <Tabs.Tab key={item.key} title={item.title} />
        ))}
      </Tabs>

      <Swiper
        direction="horizontal"
        loop
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index);
        }}
      >
        {tabItems.map((item, index) => {
          return (
            <Swiper.Item key={index}>
              <div
                style={{
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "15px",
                  backgroundColor: "white",
                }}
              >
                {item.content}
              </div>
            </Swiper.Item>
          );
        })}
      </Swiper>
    </Block>
  );
};

export default DefaultTab;
