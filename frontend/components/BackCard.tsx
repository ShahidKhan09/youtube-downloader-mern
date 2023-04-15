import styled from "styled-components";
export const BackCardWrapped = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 250px;
`;
export const BackCard = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  min-height: 80vh;
  width: 100%;
  padding: 30px;
  -webkit-box-shadow: 5px 5px 10px 5px #dddddd;
  -moz-box-shadow: 5px 5px 10px 5px #dddddd;
  box-shadow: 5px 5px 10px 5px #dddddd;
  border-radius: 5px;
`;
export const ParagraphWrapper = styled.div`
  text-align: "left";
  line-height: "30px";
  color: ${(props) => props.theme.colors.main};
`;
