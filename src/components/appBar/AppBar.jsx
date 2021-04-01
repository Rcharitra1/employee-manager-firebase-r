import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logo from '../icons/Logo';

const AppBarStyled = styled.nav`
    box-shadow:0 0 3px 1px grey;
    position:fixed;
    top:0;
    left:0;
    right:0;
    font-weight:200;

    background-color:lightblue;
        
    ul{
        max-width:1000px;
        margin:0 auto;
        display:flex;
        justify-content:space-between;
        padding:0.5rem 1rem;
        align-items:center;
        

    }
    li:first-child
    {
        flex-basis:75%;
    }
    .link{
        color:white;
        text-decoration:none;
    }
    .link:hover{
        border-bottom:1px solid whitesmoke;
        color:whitesmoke;
    }
    svg{
        width:2.0rem;
        height:2.0rem;
    }

    @media (min-width:600px)
    {
        li:first-child{
            flex-basis:80%;
        }
    }

`;

const AppBar = () => {
    return (
        <AppBarStyled>
        <ul>
            <li><Link to="/"><Logo/></Link></li>
            <li><Link className="link" to="/login">Login</Link></li>
            <li><Link className="link" to="/register">Register</Link></li>
        </ul>
        </AppBarStyled>
      );
}
 
export default AppBar;