import React from "react";
import styled from "styled-components";
const Button = () => {
  return (
    <div style={{ marginRight: " 20px" }}>
      <ButtonStyle type="button">Subscribe</ButtonStyle>
    </div>
  );
};

export default Button;

const ButtonStyle = styled.button`
  background: #de35ae;
  border-radius: 999px;
  box-shadow: #de35ae 0 10px 20px -10px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
    NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
    EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  opacity: 1;
  outline: 0 solid transparent;
  padding: 8px 18px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: fit-content;
  word-break: break-word;
  border: 0;
`;
