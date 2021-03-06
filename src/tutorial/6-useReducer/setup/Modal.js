import React, { useEffect } from "react";

const Modal = ({ myclose, veri }) => {
  useEffect(() => {
    setTimeout(() => {
      myclose();
    }, 2000);
  });
  return <div style={{ color: veri.color }}>{veri.title}</div>;
};

export default Modal;
