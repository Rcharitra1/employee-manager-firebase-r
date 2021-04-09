
import React from 'react';
import styled from 'styled-components';
import Logo from '../components/icons/Logo';
import {Link} from 'react-router-dom';

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

  div{
    margin:0.5rem 0rem;
    display: flex;
    justify-content:space-between;
  }
  div>*{
    flex-basis:45%;
  }
  
  .link{
    
    color:white;
    text-decoration:none;
    font-size:1.0rem;
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    box-shadow:0 0 5px 0 grey;
    border-radius:6px;
    margin:0 0.5rem;
    background-color:#03a9f4;
    padding:0.65rem 0.5rem;

  }
  .link-register{
    background-color:#f15b29;
  }
`

const HomePage = (props) => {
    return (

        <HomePageStyles>

        <Logo className="logo"/>
        <h1>Employee Manager</h1>
        <p>Focus on people and we'll focus on the paperwork</p>

        <div>
        <Link className="link" to="/login">Login</Link>
        <Link className="link link-register" to="/register">Register</Link>
        </div>
      
        </HomePageStyles>
        
      );
}
 
export default HomePage;