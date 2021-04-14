import React, {useState}from 'react';
import firebaseApp from '../firebase/firebaseConfig';
import styled from 'styled-components';
import FormInput from '../components/forms/FormInput';
import Button from '../components/buttons/Button';
import {Link, Redirect} from 'react-router-dom';

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
    .error{
        color:red;
        font-size:0.8rem;
    }

`;


const RegisterPage = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setError] = useState('');

    const handleClick=(e)=>
    {
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setLoggedIn(true);
            })
            .catch((error) => {
                setError(error)
            
            });
    }

    if(isLoggedIn)
    {
        return <Redirect to='/login'/>
    }
    else
    {

    return ( 
        <RegisterPageStyles>
            <header>
            <h1>
                Unlimited Free Trial Sign up
            </h1>
            <p>
                No credit card required
            </p>
            </header>
            <FormInput label="Name on the account" type="text"/>
            <FormInput label="valid email address" type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
            {errors && errors.code==='auth/invalid-email' && <p className="error">{errors.message}</p>}
            <FormInput label="password (min 6 characters)" type="password" onChange={(e)=>setPassword(e.target.value.trim())} />
            {errors && errors.code==='auth/weak-password' && <p className="error">{errors.message}</p>}
           
            <Button label="Create a free account" uistyle="signup" onClick={handleClick} />
            <p>Already a member? <Link className="links"  to="/login">Login</Link></p>

        </RegisterPageStyles>
        
        );
    }
}
 
export default RegisterPage;