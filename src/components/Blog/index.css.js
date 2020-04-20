import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardsWrapperCss = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 100px 0;
`;

export const LinkCss = styled(Link)`
  margin: 0 15px 30px;
  text-decoration: none;
`;
