import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    justify-content: ${({ justify }) => justify};
    align-items: ${({ alignItems }) => alignItems};
    flex-wrap: ${({ wrap }) => wrap};
    width: 100%;
    // height: 100%;
`;

export const Wrapper = styled.div`
    margin-top: 5em;
    width: 100%;
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
        width: 35%;
        &:hover {
        cursor: grab;
        }
    }
    p{
        font-size: 24px;
        font-weight: 400;
        width: 560px;
        text-align: center;
        line-height: 33px;
    }
`

export const Box = styled.div`
    width: 569px;
    height: 380px;
    background: #4C837A;
    border-radius: 25px;

    label{
        color: white;
        font-size: 20px;
        margin-left: 5px;
    }
    .addBtn{
        background: white;
        border-radius: 50%;
        width: 4em;
        height: 4em;
    }
    .delBtn{
        background: white;
        border-radius: 50%;
        width: 4em;
        height: 4em;
        margin-right: 7em;
        // padding: 1em;
    }
    .generate{
        margin-top: 2em;
        color: white;
        background: #04253A;
    }
    input[type=text] {
        // width: 70%;
        width: 25em;
        padding: 15px;
        margin:10px 0;
        border: 0;
        box-shadow:0 0 15px 4px rgba(0,0,0,0.1);
        border-radius: 4px;
    }
`

// export const Button = styled.a`
//     display: inline-block;
//     border-radius: 50%;
//     padding: 1rem 0;
//     width: 4rem;
//     background: white;
//     color: black;
//     font-size: 20px;
//     font-weight: bold;
//     text-decoration: none;
//     cursor: pointer;
    
// `

export const Edit = styled.div`
    width: 569px;
    height: 480px;
    background: white;
    // border-radius: 25px;
    // border: 1px solid black;

    p{
        background: white;
        border: 1px solid black;
        border-radius: 5px;
        font-size: 17px;
        padding: 5px;
        width: 5em;
        margin-left: 2em;
    }
    img{
        width: 35em;
        height: 25em;
        margin-top: 3em;
        margin-bottom: 3em;
    }
`