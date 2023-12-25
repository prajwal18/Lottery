import React from 'react'
import styled from 'styled-components';
import photo from '../../assets/images/chicken.jpg'
import {BsArrowRightSquareFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
height:100vh;
widhth:100vw;
background-image:url(${photo});
background-size:cover;

background-position:center;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
marginY:'30px'
`
export const CustButoon = styled.button`
background-color:#FFD700;
font-weight:bold;
display:flex;
align-items:center;
gap:16px;
transition-duration:0.2s;
&:hover{
  transform: scale(1.05);
  background-color:#FFFF;
  cursor:pointer;
}
`

const WelcomePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/upload", {state: {allowAccess: true}});
  }
  return (
    <Wrapper style={{color:'white'}}>
      <h2 style={{textAlign:'center' , fontSize:'32px', fontWeight:'normal'}}>Welcome to Valley Cold Store </h2>
      <h1 style={{fontSize:'84px',margin:'30px 0px '}}>GIVAWAY</h1>
      <h1 style={{ fontSize:'42px', fontWeight:'normal'}}>41+ Years Of Quality & Freshness </h1>
      <CustButoon  
      onClick={handleClick}
      style={{padding:' 16px 28px',borderRadius:'5px',border:'none',fontSize:'20px',position:'absolute',bottom:'60px'}}>
        Proceed To Lottery<BsArrowRightSquareFill style={{fontSize:'28px'}}/>
      </CustButoon>
      
    </Wrapper>
  )
}

export default WelcomePage