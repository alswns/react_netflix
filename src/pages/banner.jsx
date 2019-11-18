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
&:hover{
        font-weight:normal;
        color: #b3b3b3
}; 
`
const NavIcon=styled.ul`
        display: flex;
        
`
const NavIconItem=styled.li`
        height: 100%;
        width: fit-content;
        list-style:none;
        margin-right:3px;
`
const Img=styled.img`
        list-style:none;
        height: 100%;
`
const setFont=(event)=>{
        let asd =document.getElementsByClassName('asd')
        for(let a=0;a<asd.length;a++){
                asd[a].style.fontWeight='normal'
                asd[a].style.color='#e5e5e5'
        }
        event.target.style.fontWeight='bold'
        event.target.style.color='#000'
                
}
const Banner = props => {

        return (
        <>
                <Wrapper>
                        
                        <Logo src='https://cdn.pixelprivacy.com/wp-content/uploads/2017/12/Netflix-Logo-1024x277.png'></Logo>
                        <NavText>
                        <NavTextItem className='asd' onClick={setFont}>홈</NavTextItem>
                        <NavTextItem className='asd' onClick={setFont}>TV 프로그램</NavTextItem>
                        <NavTextItem className='asd' onClick={setFont}>최신 등록 콘텐츠</NavTextItem>
                        <NavTextItem className='asd' onClick={setFont}>내가 찜한 콘텐츠</NavTextItem>
                        </NavText>

                        <NavIcon>
                                <NavIconItem>
                                <Img src="/search.svg" alt=""/>
                                </NavIconItem>
                                <NavIconItem>
                                        
                                <Img src="/gift.svg" alt=""/>
                                </NavIconItem>
                                <NavIconItem>
                                        
                                <Img src="/bell.svg" alt=""/>
                                </NavIconItem>
                        </NavIcon>


                        
                </Wrapper>
        </>
        )


}
export default Banner