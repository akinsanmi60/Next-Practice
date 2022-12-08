import styled from "styled-components";

type Prop = {
  fix: boolean;
};
export const HeaderWrapper = styled.div<Prop>`
  position: sticky;
  top: 0;
  width: 100%;
  transition: "all 0.3s ease-in-out 0s";
  background: ${({ fix }) => (fix ? "blue" : "red")};

  /* border-bottom: 1px solid rgb(223, 227, 231);
  background: "blue";
  box-shadow: "0 6px 13px rgba(38,78,118,0.1)"; */
`;
