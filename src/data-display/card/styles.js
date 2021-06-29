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
  display: flex;
  align-items: center;
  flex-direction: row;
  min-height: ${HeadProps => (HeadProps.size == "small" ? "36px" : "48px")};
  margin-bottom: -1px;
  padding: ${HeadProps => (HeadProps.size == "small" ? "0 12px" : "0 24px")};
  color: #000000d9;
  font-weight: 500;
  font-size: 16px;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
`;

export const TitleStyle = styled.div`
  display: inline-block;
  flex: 1;
  padding: ${HeadProps => (HeadProps.size == "small" ? "8px 0px" : "16px 0px")};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: ${HeadProps => (HeadProps.size == "small" ? "14px" : "16px")};
`;

export const ExtraStyle = styled.div`
  float: right;
  margin-left: auto;
  padding: ${HeadProps => (HeadProps.size == "small" ? "8px" : "16px")};
  color: #000000d9;
  font-weight: 400;
  font-size: 14px;
`;

export const ActionStyle = styled.ul`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border-top: 1px solid #f0f0f0;

  & > li {
    float: left;
    margin: 12px 0;
    color: #00000073;
    text-align: -webkit-center;
  }

  & > li:not(:last-child) {
    border-right: 1px solid #f0f0f0;
  }

  &:before {
    display: table;
    content: "";
  }

  &:after {
    display: table;
    clear: both;
    content: "";
  }
`;

export const BodyStyle = styled.div`
  padding: ${BodyProps => (BodyProps.size == "small" ? "12px" : "24px")};

  p {
    margin: 0px;
  }
`;

// MetaStyles

export const AvatarStyle = styled.span`
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
  display: inline-block;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: #ccc;
  width: 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 50%;
`;

export const MetaTitleStyle = styled.div`
  overflow: hidden;
  color: #000000d9;
  font-weight: bold;
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const DetailStyle = styled.div`
  overflow: hidden;

  & > div:not(:last-child) {
    margin-bottom: 8px;
  }
`;
