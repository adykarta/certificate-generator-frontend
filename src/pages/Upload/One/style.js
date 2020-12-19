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
    margin-top: 5em;
    width: 100%;
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
    .submit{
        background: #6F9E97;
        font-size: 17px;
        font-weight: bold;
        width: 11rem;
        padding: 0.7rem 0;
        margin-top: 1rem;
        :hover{
            background: #6F9E97;
        }
    }
`

export const Upload = styled.div`
    background: #EFEDED;
    width: 749px;
    height: 358px;
    border-radius: 25px;

    .header{
        margin: 0;
        font-weight: 600;
    }
    .box{
        width: 570px;
        height: 219px;
        border-style: dotted;

        p{
            margin-top: 3.5em;
        }
    }
    


`

export const Button = styled.a`
    display: inline-block;
    border-radius: 5px;
    padding: 1rem 0;
    margin: 2.5rem 1rem;
    width: 11rem;
    background: #6F9E97;
    color: black;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
    
`

export const Footer = styled.p`
    // position: absolute;
    // bottom: 0;
    font-size: 20px;
    text-align: center;
    // margin-top: 15em;
    
`