import React from "react"
import styled from 'styled-components'

const Wrapper=styled.div`
width:100vw;
height:68px;
display:flex;
padding:20px 58px;
box-sizing:border-box;
`

const Logo=styled.img`
height:100%;
margin-right:30px;
`

const NavText=styled.ul`
align-items:center;
display:flex;
flex:1;
`
const NavTextItem=styled.li`
color:white;
list-style:none;
margin-right:10px;
`
const NavIcon=styled.ul`

`
const NavIconItem=styled.li``
const Img=styled.img`
list-style:none;
height:68px;
`
const Banner = props => {

        return (
        <>
                <Wrapper>
                        
                        <Logo src='https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png'></Logo>
                        <NavText>
                        <NavTextItem>홈</NavTextItem>
                        <NavTextItem>TV 프로그램</NavTextItem>
                        <NavTextItem>최신 등록 콘텐츠</NavTextItem>
                        <NavTextItem>내가 찜한 콘텐츠</NavTextItem>
                        </NavText>

                        <NavIcon>
                                <NavIconItem>
                                <Img src="/search.svg" alt=""/>
                                <Img src="/gift.svg" alt=""/>
                                <Img src="/bell.svg" alt=""/>
                                </NavIconItem>
                        </NavIcon>


                        
                </Wrapper>
        </>
        )


}
export default Banner