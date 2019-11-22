import React from "react"
import styled from 'styled-components'

const Wrapper=styled.div`
    color:black;
    transition:0.3s;    
    width: calc(20% - 8px);
    padding-bottom:10%;
    height:0;
    margin-right:8px;
    position: relative;
    &>div{
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        background-color:#eee;
        display:flex;
        justify-content:center;
        align-items:center;

    }
    &:hover{
        transform:scale(1.5);

    }
`
// const a=styled.button``

const Movieitem =props =>{
    return(
        <Wrapper>
            <div>{props.title}</div>
        </Wrapper>
    )
}
export default Movieitem;