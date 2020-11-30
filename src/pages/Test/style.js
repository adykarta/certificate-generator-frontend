import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  #mydiv {
    position: absolute;
    z-index: 9;
    background-color: #f1f1f1;
    text-align: center;
    border: 1px solid #d3d3d3;
    width: 100px;
    height: 100px;
    &:hover {
      cursor: grab;
    }
  }
  .box {
    width: 700px;
    height: 500px;
    border: 1px solid black;
  }
`;
