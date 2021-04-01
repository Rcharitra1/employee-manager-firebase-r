import React from 'react';
import styled from 'styled-components';
import FormInput from '../components/forms/FormInput';
import Button from '../components/buttons/Button';
import {Link} from 'react-router-dom';
import AppBar from 'components/appBar/AppBar';
const RegisterPageStyles = styled.aside`
    width:380px;
    margin: 6rem auto 0;
    header{
        text-align:center;

    }
    h1{
        font-size:2.25rem;
        margin:0.5rem 0;
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

`;


const RegisterPage = (props) => {
    return ( 
        <RegisterPageStyles>
            <AppBar/>
            <header>
            <h1>
                Unlimited Free Trial Sign up
            </h1>
            <p>
                No credit card required
            </p>
            </header>
            <FormInput label="Name on the account" type="text"/>
            <FormInput label="valid email address" type="email"/>
            <FormInput label="password (min 6 characters)" type="password"/>
            <Button label="Create a free account" uistyle="signup"/>
            <p>Already a member? <Link className="links"  to="/login">Login</Link></p>

        </RegisterPageStyles>
        
        );
}
 
export default RegisterPage;