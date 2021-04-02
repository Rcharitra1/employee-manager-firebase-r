
import React from 'react';
import styled from 'styled-components';
import Logo from '../components/icons/Logo';

const HomePageStyles = styled.header`


  
    text-align:center;
    margin: 6rem auto;
    width:380px;
  
  .logo{
    width:80px;
  }
  h1{
    font-size:2.25rem;
  }
  p{
    color:#767484;
    margin-top:0.5rem;
  }
`

const HomePage = (props) => {
    return (

        <HomePageStyles>

        <Logo className="logo"/>
        <h1>Employee Manager</h1>
        <p>Focus on people and we'll focus on the paperwork</p>
      
        </HomePageStyles>
        
      );
}
 
export default HomePage;