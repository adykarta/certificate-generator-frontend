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

    .title{
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
    .header{
        font-size: 23px;
        font-weight: 600;
    }
    .box{
        width: 490px;
        height: 160px;
        border-style: dotted;

        p{
            margin-top: 2.5em;
            font-size: 24px;
            font-weight: bold;
        }
    }
`

export const Paper = styled.div`
    background: #EFEDED;
    width: 600px;
    height: 490px;
    border-radius: 25px;
`

export const Upload = styled.div`

`

export const Footer = styled.p`
    // position: absolute;
    // bottom: 0;
    font-size: 20px;
    text-align: center;
    // margin-top: 15em;
    
`