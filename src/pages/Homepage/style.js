import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ alignItems }) => alignItems};
    flex-wrap: ${({ wrap }) => wrap};
`;

export const Wrapper = styled.div`
    margin-top: 5rem;
    width: 100vw;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items:center;
    // white-space: pre;

    p{
        font-size: 24px;
        font-weight: 400;
        width: 560px;
        align: center;
        line-height: 33px;
    }

`

export const Option = styled.div`
    margin-top: 5em;
    background: #EFEDED;
    border-radius: 25px;
    width: 749px;
    height: 195px;
    p{
        text-align: center;
        font-size: 24px;
        weight: 700;
    }
`

export const Button = styled.a`
    display: inline-block;
    border-radius: 30px;
    padding: 1rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: #6F9E97;
    color: black;
    text-decoration: none;
`

export const Footer = styled.p`
    position: absolute;
    bottom: 0;
    font-size: 20px;
    text-align: center;
   
`

