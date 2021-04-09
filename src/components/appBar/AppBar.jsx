import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Logo from '../icons/Logo';


const AppBarStyled = styled.nav`
    box-shadow:0 0 5px 1px grey;
    z-index:3;
    position:relative;
    font-weight:200;
    background-color:lightblue;
    ul{
        display:flex;
        justify-content:space-between;
        padding:0.5rem 1.75rem;
        align-items:center;       
    }
    li:first-child
    {
        
        flex-basis:66%;
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
            flex-basis:76%;
        }
    }

    @media (min-width:1000px)
    {
        li:first-child{
            flex-basis:82%;
        }
    }
`;

const AppBar = () => {
   
        return (
            <AppBarStyled>
            <ul>
                <li><Link to="/"><Logo/></Link></li>
                <li><Link to="/dashboard" className="link">Dashboard</Link></li>
            </ul>
            </AppBarStyled>
          );
    
    
}
 
export default AppBar;