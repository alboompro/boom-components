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
  `;

export const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  & > li:after {
    padding: 0 8px;
  }
`;

export const Crumb = styled.li`
  display: inline-block;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  a {
    text-decoration: none;

    &:hover, &:active {
      text-decoration: underline;
    }
  }
`;