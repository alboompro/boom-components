import styled from "styled-components";

export const Container = styled.div`
  margin: 40px auto;
  max-width: ${props => (props.small ? "740px;" : "1300px;")};

  @media screen and (max-width: 1600px) {
    margin: 40px auto;
  }

  @media screen and (max-width: 767px) {
    margin: 20px;
    padding: 0;
  }

  > div.tabs {
    color: #838383;
    padding: 0 20px;

    @media (max-width: 768px) {
      white-space: nowrap;
      overflow-x: scroll;
      padding: 0;
      max-width: 90%;
      margin: 0 auto;
    }

    a {
      display: inline-block;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      color: #838383;
      padding: 5px 25px;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        text-decoration: none;
      }

      &.active {
        color: #50aff4;

        &::after {
          content: "";
          display: block;
          width: calc(100% + 50px);
          height: 5px;
          background-color: #50aff4;
          margin-top: 5px;
          margin-bottom: -5px;
          margin-left: -25px;
          border-radius: 3px 3px 0 0;
        }
      }
    }
  }
`;

export const ContainerInner = styled.div`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #e8e8e8;
  padding: 50px;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`;
