import styled, { css } from "styled-components";

const textColor = "#666";
const borderStyle = "1px solid #d9d9d9";

export const CardStyle = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  background: #fff;
  border-radius: 2px;
  border: ${props => (props.bordered ? "1px solid #f0f0f0" : "none")};

  h2 {
    font-size: 30px;
  }
`;

export const CardHead = styled.div`
  min-height: 48px;
  margin-bottom: -1px;
  padding: 0 24px;
  color: #000000d9;
  font-weight: 500;
  font-size: 16px;
  /* background: 0 0; */
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
`;

export const CardBody = styled.div`
  padding: 24px;
`;
