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
        background:none;
        color:#fff;
    }
    &>img{
        width:100%;
        height:100%;
        position:absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        display:flex;
        justify-content:center;
        align-items:center;

    }
    &:hover{
        transform:scale(1.15);
        z-index:100;
        
    }
`
// const a=styled.button``

const Movieitem =props =>{
    const path="http://image.tmdb.org/t/p/w185" + props.datas.backdrop_path
    
    return(
        <Wrapper>
                <img src={path} alt=""/>
                <div>{props.datas.title}</div>
        </Wrapper>
    )
}
export default Movieitem;