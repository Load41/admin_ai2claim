import { Select } from "antd";
import clsx from "clsx";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import styles from "./LDSwiper.module.css";
export function LDSwiper({
  SwiperSlide,
  clsssName,
  grabCursor,
  breakpoints,
  ...rest
}) {
  return (
    <>
     <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        breakpoints={breakpoints}
        className={clsssName}
        grabCursor={grabCursor}
        {...rest}
      >
        {SwiperSlide}
      </Swiper>
    </>
  );
}
