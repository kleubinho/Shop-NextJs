import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  gap: "3rem",
  backgroundColor: "red",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px)/ 2))",
  marginLeft: "auto",
  minHeight: 656
});
export const Product = styled("a", {
    background: 'linear-gradient(180deg, #1ea483 0%)'
});
