import styled, { css } from "styled-components";

const textColor = "#666";
const borderStyle = "1px solid #d9d9d9";

export const CardStyle = styled.div`
  box-sizing: border-box;
  margin-bottom: 10px;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
  background: #fff;
  border-radius: 2px;
  border: ${StyleProps => (StyleProps.bordered ? "1px solid #f0f0f0" : "none")};

  ${StyleProps =>
    StyleProps.hoverable
      ? `&:hover { cursor: pointer;
        border-color: transparent;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;}
        transition: box-shadow 0.3s, border-color 0.3s;
        `
      : ""}
  img {
    width: inherit;
  }
`;

export const HeadStyle = styled.div`
  min-height: ${HeadProps => (HeadProps.size == "small" ? "36px" : "48px")};
  margin-bottom: -1px;
  padding: ${HeadProps => (HeadProps.size == "small" ? "0 12px" : "0 24px")};
  color: #000000d9;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;

  h2 {
    font-size: ${HeadProps => (HeadProps.size == "small" ? "14px" : "16px")};
  }
`;

export const BodyStyle = styled.div`
  padding: ${BodyProps => (BodyProps.size == "small" ? "12px" : "24px")};

  p {
    margin: 0px;
  }

  h2 {
    font-size: ${HeadProps => (HeadProps.size == "small" ? "14px" : "16px")};
  }
`;
