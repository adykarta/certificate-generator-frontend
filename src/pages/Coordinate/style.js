import styled from 'styled-components'
import { enumDeclaration } from '@babel/types';

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ alignItems }) => alignItems};
    flex-wrap: ${({ wrap }) => wrap};
    margin: ${({ margin }) => margin};
    width: ${({ width }) => width};
    height: 100%;
`;

export const Wrapper = styled.div`
  font-family: 'Nunito';
  backgroundColor: '#F5F5F5';
  margin-top: 2em;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  #mydiv {
    position: absolute;
    z-index: 9;
    background-color: #fefefe;
    text-align: center;
    border: 1px solid #d3d3d3;
    width: 15%;
    &:hover {
      cursor: grab;
    }
  }
  p{
      font-size: 24px;
      font-weight: 400;
      width: 560px;
      align: center;
      line-height: 33px;
  }
`;

export const WrapperImage = styled.div`
  height:100%;
  width: 100%;
  background: url("${({ url }) => url}");
  background-repeat: no-repeat;
  background-size: contain, cover;
`;

export const Card = styled.div`
    background: #4C837A;
    margin: 1em;
    width: 80%;
    height: 358px;
    border-radius: 25px;
    .box{
        width: 570px;
        height: 219px;
        border-style: dotted;
        p{
            margin-top: 3.5em;
        }
    }
`;

export const Footer = styled.p`
    position: absolute;
    bottom: 0;
    font-size: 20px;
    text-align: center;  
`;