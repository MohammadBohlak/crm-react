import React from "react";
import styled from "styled-components";
import ThemeButton from "./common/themeButton/ThemeButton";

const Boxes = styled.div`
  div {
    width: 200px;
    height: 100px;
  }
`;

const Box1 = styled.div`

    background-color:  ${({ theme }) => theme.colors.primary };
    /* background-color:  red; */
`;
const Box2 = styled.div`
    background-color:  ${({ theme }) => theme.colors.secondary };
`;
const Box3 = styled.div`
    background-color:  ${({ theme }) => theme.colors.background };
`;
const Box4 = styled.div`
    background-color:  ${({ theme }) => theme.colors.text };
`;
const Box5 = styled.div`
    background-color:  ${({ theme }) => theme.colors.textMuted };
`;
const Box6 = styled.div`
    background-color:  ${({ theme }) => theme.colors.border };
`;

function TestColors(props) {
  return <>
   <ThemeButton>
            Set Theme
          </ThemeButton>
    <Box1 >primary</Box1>
    <Box2 >secondary</Box2>
    <Box3 >background</Box3>
    <Box4 >text</Box4>
    <Box5 >textMuted</Box5>
    <Box6 >border</Box6>
    
    {/* <Box1 /> */}
  </>;
}

export default TestColors;
