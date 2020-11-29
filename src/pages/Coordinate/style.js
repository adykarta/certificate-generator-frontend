import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ alignItems }) => alignItems};
    flex-wrap: ${({ wrap }) => wrap};
    width: 100%;
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
  p{
      font-size: 24px;
      font-weight: 400;
      width: 560px;
      align: center;
      line-height: 33px;
  }
`;

export const Card = styled.div`
    background: #4C837A;
    margin: 1em;
    width: 749px;
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