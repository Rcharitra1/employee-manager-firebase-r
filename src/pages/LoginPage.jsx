import React from 'react';
import styled from "styled-components";
import Button from '../components/buttons/Button';
import FormInput from '../components/forms/FormInput';
import {Link} from 'react-router-dom';
import AppBar from '../components/appBar/AppBar';

const LoginPageStyes=styled.aside`
 width:380px;
    margin: 6rem auto 0;
    header{
        text-align:center;

    }
    h1{
        font-size:2.25rem;
        margin:0.5rem 0;
        font-weight:500;
    }
    input{
        margin:0.25rem 0;
    }
    button{
        margin:0.5rem 0;
    }
    .links{
        color:blue;
        text-decoration:none;
        
    }
    .links:hover{
        border-bottom:1px solid blue;
    }
`

const LoginPage = (props) => {
    return ( 
        
        <LoginPageStyes>
        <AppBar/>
        <header>
            <h1>
                Login Page
            </h1>
        </header> 
        <FormInput label="email address" type="email"/>
        <FormInput label="password" type="password"/>

        <Button label="Login" uistyle="login"/>

        <p>Not a member? <Link className="links" to="/register">Register</Link></p>

        </LoginPageStyes>
        
        );
}

 
export default LoginPage;