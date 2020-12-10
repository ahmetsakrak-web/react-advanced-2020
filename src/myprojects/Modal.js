import React, { useEffect } from "react";

const Modal = ({ content, fak }) => {
  useEffect(() => {
    setTimeout(() => {
      fak();
    }, 2000);
  });
  return <div style={{ color: content.color }}>{content.content}</div>;
};

export default Modal;
