import styled from "styled-components";
import { SearchCard } from "../components/Styled";

export const StyleShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration-color: #000;
      color: #000;
      &:hover {
        text-decoration-color: blue;
        color: blue;
      }
    }
    button {
      background: ${(prop) => (prop.active ? "#d13636" : "#5e5df0")};
      border-radius: 999px;
      box-shadow: #5e5df0 0 10px 20px -10px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      font-family: Inter, Helvetica, "Apple Color Emoji", "Segoe UI Emoji",
        NotoColorEmoji, "Noto Color Emoji", "Segoe UI Symbol", "Android Emoji",
        EmojiSymbols, -apple-system, system-ui, "Segoe UI", Roboto,
        "Helvetica Neue", "Noto Sans", sans-serif;
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
    }
  }
`;
export const Star = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  // background-color: #ffc806;
  background-color: ${(prop) => (prop.active ? "#ffc806" : "#ddd")};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
`;
